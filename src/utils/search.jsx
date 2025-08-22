import axios from "axios";
import {getTime, sleep} from "./time"
import { getRequestWithRetry } from "./request";
import { apiBaseUrl } from "../api/api";

export async function search(navigate, text, type) {
    const navigateText = encodeURIComponent(text);
    navigate(`/search?type=${type}&text=${navigateText}`);
    
    makeData(text);
}

export function makeData(text) {
    let datas = JSON.parse(localStorage.getItem("history")) ?? [];
    // datas: 新[0] -> 古[3]

    const newData = {
        text: text,
        time: getTime()
    }

    // 추가하기 전 최근 검색어 살피기
    const recentTexts = datas.map((element) => element.text);

    let flag = true;

    // 최신으로 교체
    for (let i = 0; i <= recentTexts.length; i++) {
        if (recentTexts[i] === text) {
            datas.splice(i, 1)
            datas.unshift(newData);
            flag = false;
        }
    }

    // 없으면 데이터 추가
    if(flag) {
        datas.unshift(newData);
        datas.splice(4, 1);
    }

    localStorage.setItem("history", JSON.stringify(datas));
}



/* 데이터 가져오기 */

async function searchLaws(text) {
    try {
        // process로 처리한거
        const lawList = await axios.post(`${apiBaseUrl}/legal/process`, {
            "story": text
        }).then(res => res.data.law);

        return lawList;
    } catch (error) {
        console.log(`getLawList: ${error}`)

        await sleep(1000)

        return searchLaws(text)
    }
}


/* !!!export!!! */
export async function getLawData(text) {
    const searchedLaws = await searchLaws(text);
    const lawIds = searchedLaws.map(element => element["법령ID"]);
    const promiseList = lawIds.map(id =>
        getRequestWithRetry(`/legal/detail/${id}`)
    )

    try {
        let detailDatas = await Promise.all(promiseList);
        
        for (let i = 0 ; i < promiseList.length; i++) {
            detailDatas[i]["lawId"] = lawIds[i];
        }

        if (detailDatas.length === 0) throw new Error("Empty Data, retry.")
        else if (typeof detailDatas == "undefined") throw new Error("Undefined Data, retry.")

        return detailDatas
    }
    catch (error){
        console.log(`data 불러오기 실패 : ${error}`)
        return getLawData(text);
    }
}
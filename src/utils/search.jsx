import {getTime} from "./time"
import { encodeUnicode } from "./base64";

export async function search(navigate, text, type) {
    const navigateText = encodeURIComponent(text);
    navigate(`/search?type=${type}&text=${navigateText}`);
    
    makeData(text);
}

export function makeData(text) {
    let datas = JSON.parse(localStorage.getItem("history")) ?? [];

    const newData = {
        text: text,
        time: getTime()
    }

    datas.unshift(newData);
    datas.splice(3, 1);

    localStorage.setItem("history", JSON.stringify(datas));
}
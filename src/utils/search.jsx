import {getTime} from "./time"


export function search(navigate, text, type) {
    navigate(`/search?text=${text}&type=${type}`);
    makeData(text);
}

export function makeData(text) {
    let datas = JSON.parse(localStorage.getItem("history"));

    const newData = {
        text: text,
        time: getTime()
    }

    datas.unshift(newData);
    datas.splice(3, 1);

    localStorage.setItem("history", JSON.stringify(datas));
}
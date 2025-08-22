import axios from "axios";
import { sleep } from "./time";
import { apiBaseUrl } from "../api/api";

export async function getRequestWithRetry(url) {
    try {
        return await axios.get(`${apiBaseUrl}${url}`).then(res => res.data);
    } catch (error) {
        console.log(`getRequestWithRetry(${url}) : ${error}`);
        await sleep(1000);

        return getRequestWithRetry(url);
    }
}
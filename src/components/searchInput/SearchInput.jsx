import styles from "./SearchInput.module.css"
import IconButton from "../iconButton/IconButton"
import { useState } from "react"

export default function SearchInput(props) {
    const [inputText, setInputText] = useState("");


    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="사례나 상황을 입력해주세요."
                onChange={(event) => setInputText(event.target.value)}
            />
            <IconButton
                srcName="search.svg"
                sideLength="36px"
                address={`/search/${inputText}`}
            />
        </div>
    )
}
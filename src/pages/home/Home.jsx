import styles from "./Home.module.css"
import testImage from "../../assets/images/test-image.JPEG"
import { useEffect, useRef, useState } from "react";
import searchImage from "../../assets/images/search.svg"
import SearchHistoryItem from "./SearchHistoryItem/SearchHistoryItem";

export default function Home() {
    const inputRef = useRef(null);

    const [text, setText] = useState("");
    const [isHistoryOn, setIsHistoryOn] = useState(false);
    const [searchedList, setSearchedList] = useState([
        "이것은",
        "테스트",
        "입니다"
    ])

    const search = () => {
        // TODO
        console.log(`searching ${text}...`);
    }

    const handleInputKey = (event) => {
        event.key === "Enter" && search();
        event.key === "Escape" && inputRef.current.blur();
    }

    return (
        <>
            <img id={styles.logo} src={testImage}/>
            <div id={styles.searchContainer}>
                <div id={styles.inputContainer}>
                    <input 
                        id={styles.input}
                        type="text" 
                        placeholder="사례나 상황을 입력해주세요." 
                        onChange={(event) => setText(event.target.value)}
                        onFocus={() => setIsHistoryOn(true)}
                        onBlur={() => setIsHistoryOn(false)}
                        onKeyDown={handleInputKey}
                        ref={inputRef}
                    />
                    <img
                        id={styles.searchButton}
                        src={searchImage}
                        onClick={search}
                        
                    />
                    
                </div>
                {isHistoryOn && searchedList.map((text, index) => (
                    <SearchHistoryItem
                        key={index}
                        text={text}
                        setSearchedList={setSearchedList}
                        searchedList={searchedList}
                        index={index}
                    />
                ))}
                {/* 여기에 16px padding 있던데 일단 뺌 */}
            </div>
        </>
    );
}
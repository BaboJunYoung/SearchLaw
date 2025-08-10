import styles from "./Home.module.css"
import { useEffect, useRef, useState } from "react";
import searchImage from "../../assets/icons/search.svg"
import { useNavigate } from "react-router";
import logo from "../../assets/images/logo.JPEG"
import SearchInput from "../../components/searchInput/SearchInput.jsx"
import SearchHistoryItem from "../../components/searchHistoryItem/SearchHistoryItem.jsx";

export default function Home() {
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [text, setText] = useState("");
    const [isHistoryOn, setIsHistoryOn] = useState(false);
    const [searchedList, setSearchedList] = useState([
        "이것은",
        "테스트",
        "입니다"
    ])

    const search = () => {
        navigate(`/search/all/${text}`);
        console.log(`searching ${text}...`); // TODO: back-end
    }

    const handleInputKey = (event) => {
        event.key === "Enter" && search();
        event.key === "Escape" && inputRef.current.blur();
    }

    return (
        <>
            <img className={styles.logo} src={logo}/>

            <div className={styles.searchContainer}>
                <div className={styles.inputContainer}>
                    <SearchInput
                        onChange={(event) => setText(event.target.value)}
                        onKeyDown={handleInputKey}
                        onFocus={() => setIsHistoryOn(true)}
                        onBlur={() => setIsHistoryOn(false)}
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
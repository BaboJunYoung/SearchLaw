import { useNavigate, useSearchParams } from "react-router";
import styles from "./SearchInput.module.css"
import searchIcon from "../../assets/icons/search.svg"
import { useEffect, useState } from "react";
import { search } from '../../utils/search.jsx';

export default function SearchInput(props) {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [searchType, setSearchType] = useState("all")
    
    const sendText = props.setText ?? setText;
    const sendSearchType = props.setSearchType ?? setSearchType;
    

    useEffect(() => {
        props.text && setText(props.text);
        props.searchType && setSearchType(props.searchType);
    }, [])

    const isBorder = props.isBorder ?? true; // isBorder 정의 안되면 기본값 true


    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleKeyDown = (event) => {
        event.key === "Enter" && handleSearch();
    }
    const handleClick = (event) => {
        handleSearch();
    }
    const handleSearch = () => {
        if (text === "") return
        search(navigate, text, searchType);
        sendText(text);
        sendSearchType(searchType);
    }

    return (
        <div className={`${styles.searchContainer} ${isBorder && styles.containerBorder}`}>
            <input
                className={styles.searchInput}
                value={text}
                placeholder="사례나 상황을 입력해주세요."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <img
                className={styles.searchButton}
                src={searchIcon}
                onClick={handleClick}
            />
        </div>
    )
}
import styles from "./Search.module.css"

import SearchInput from "../../components/searchInput/SearchInput"
import SearchListViewItem from "../../components/searchListViewItem/SearchListViewItem.jsx"

import logoIcon from "../../assets/icons/logo.svg"
import {  useEffect, useState } from "react";
import { apiBaseUrl } from '../../api/api';
import { getLawData, search } from "../../utils/search.jsx"
import { makeDate } from "../../utils/time.js";
import axios from "axios"
import { useSearchParams } from 'react-router';
import { useNavigate } from 'react-router';
import { getRequestWithRetry } from "../../utils/request.jsx";

export default function Search(props) {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const [text, setText] = useState(searchParams.get("text"));
    const [type, setType] = useState(searchParams.get("type"));
    const [searchList, setSearchList] = useState({
        law: [],
        case: []
    });
    /*
    구조
    searchList = {
        "law" : [
            {
                "lawId": 어쩌구,
                "법령명_한글": 어쩌구,
                "시행일자": 어쩌구,
                "소관부처이름": 소관부처 어쩌구,
                "조문": [ {...}, {...}, ... ]
            },
            {
                "lawId": 어쩌구,
                "법령명_한글": 어쩌구,
                "시행일자": 어쩌구,
                "소관부처이름": 소관부처 어쩌구,
                "조문": [ {...}, {...}, ... ]
            }, ...
        ],
        "case": [
            // data ...
        ]
    }
    */


    const handleCategoryClick = (category) => {
        search(navigate, text, category);
        setType(category)
    }

    const search = () => {
        
    }

    useEffect(() => {
        setSearchList({
            law: [],
            case: []
        });

        const getData = async () => {
            if ((type === "all" || type === "law")) {
                const data = await getLawData(text);
                console.log(data)
                setSearchList(preventState => (
                    {
                        ...preventState,
                        law: data
                    }
                ))
            }

            if (type === "all" || type === "case") {
                
            }
        }
        getData()
    }, [text])

    return (
        <div className={styles.screenContainer}>
            <header className={styles.header}>
                <img 
                    className={styles.logo}
                    src={logoIcon}
                    onClick={() => navigate("/")}
                />
            </header>
            <div className={styles.mainContainer}>
                <SearchInput
                    text={text}
                    searchType={type}
                    isBorder={true}
                    setText={setText}
                    setSearchType={setType}
                />
                <div className={styles.contentsContainer}>
                    <div className={styles.categoryList}>
                        <button 
                            className={`${styles.categoryButton} ${type === "all" && styles.categoryButtonPushed}`}
                            onClick={() => handleCategoryClick("all")}
                        >전체</button>
                        <button 
                            className={`${styles.categoryButton} ${type === "law" && styles.categoryButtonPushed}`}
                            onClick={() => handleCategoryClick("law")}
                        >법령</button>
                        <button 
                            className={`${styles.categoryButton} ${type === "case" && styles.categoryButtonPushed}`}
                            onClick={() => handleCategoryClick("case")}
                        >판례</button>
                    </div>
                    
                    <div className={styles.resultAbout}>
                        {searchList.law.length === 0 && searchList.case.length === 0 ? `"${text}"에 대해 검색 중입니다...` : `"${text}"에 대한 검색 결과입니다.`}
                    </div>
                    
                    <div className={styles.searchListView}>
                        {(type == "all" || type == "law") && searchList.law.length !== 0 && searchList.law.map(element => (
                            <SearchListViewItem
                                key={element.lawId}
                                id={element.lawId}
                                title={element["법령명_한글"]}
                                date={element["시행일자"]}
                                info={element["소관부처이름"]}
                                content={element["조문"][0]["조문내용"]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
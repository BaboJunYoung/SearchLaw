import styles from "./Search.module.css"

import SearchInput from "../../components/searchInput/SearchInput"
import SearchListViewItem from "../../components/searchListViewItem/SearchListViewItem.jsx"

import logoIcon from "../../assets/icons/logo.svg"
import {  useState } from "react";
import { apiBaseUrl } from '../../api/api';
import { decodeUnicode } from "../../utils/base64.js"
import { search } from "../../utils/search.jsx"
import axios from "axios"
import { useSearchParams } from 'react-router';
import { useNavigate } from 'react-router';

export default function Search(props) {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const [text, setText] = useState(searchParams.get("text"));
    const [type, setType] = useState(searchParams.get("type"));
    const [searchList, setSearchList] = useState([]);
    

    const handleCategoryClick = (category) => {
        search(navigate, text, category);
        setType(category)
    }

    // useEffect(() => {
    //     const getData = async () => {
    //         const postResponse = await axios.post(`${apiBaseUrl}/legal/process`, {
    //             "story": text
    //         });
    //         let lst = postResponse.data["law"];

    //         for (let elementIndex = 0; elementIndex < lst.length; elementIndex++) {
    //             let element = lst[elementIndex]
    //             const getResponse = await axios.get(`${apiBaseUrl}/legal/detail/${element["법령ID"]}`)
    //             lst[elementIndex]["소관부처이름"] = getResponse.data["소관부처이름"]
    //             lst[elementIndex]["1조"] = getResponse.data["조문"][0]["조문내용"]
    //         }
    //         console.log(lst)
    //     };
    //     getData()
    // }, [])

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
                    isBorder={false}
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
                        {searchList.length === 0 ? `${text}에 대한 검색결과가 없습니다.` : `${text}에 대한 검색결과입니다.`}
                    </div>
                    
                    <div className={styles.searchListView}>
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="20230808"
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="20230808"
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="20230808"
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="20230808"
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="20230808"
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="20230808"
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="20230808"
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="20230808"
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="  "
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                        <SearchListViewItem
                            id="010719"
                            title="10ㆍ27법난 피해자의 명예회복 등에 관한 법률"
                            date="20230808"
                            info="문화체육관광부"
                            content="제1조(목적) 이 법은 10ㆍ27법난과 관련하여 피해를 입은 사람과 불교계의 명예를 회복시켜줌으로써 인권신장과 국민화합에 이바지함을 목적으로 한다. <개정 2023.8.8>"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
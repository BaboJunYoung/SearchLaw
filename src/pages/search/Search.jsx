import { useNavigate, useParams } from "react-router"
import styles from "./Search.module.css"
import SearchInput from "../../components/searchInput/SearchInput.jsx"
import SearchItem from "../../components/searchItem/SearchItem.jsx"
import { useEffect, useRef, useState } from "react";

export default function Search() {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const params = useParams();
    const [category, setCategory] = useState(params.category);
    const [text, setText] = useState(params.text);

    const [searchContentList, setSearchContentList] = useState([]);

    useEffect(() => { // 이거 진짜 오로지 테스트용임.
        setSearchContentList([
            {
                "title": "위계공무집행방해·경범죄처벌법위반·응급의료에관한법률위반·업무방해·공무집행방해·모욕",
                "date": "3152. 10. 27.",
                "type": "형사 경찰청 소방청 아무튼 대충 긴 글",
                "content": "거짓신고로 인한 경범죄 처벌법 위반죄와 위계에 의한 공무집행방해죄의 성립 요건 및 보호법익 / 거짓신고 행위가 원인이 되어 상대방인 공무원이 범죄가 발생한 것으로 오인함으로 인하여 공무원이 그러한 사정을 알았더라면 하지 않았을 대응조치를 취하기에 이른 경우, 위계에 의한 공무집행방해죄가 성립하는...",
            },
            {
                "title": "위계공무집행방해·경범죄처벌법위반·응급의료에관한법률위반·업무방해·공무집행방해·모욕",
                "date": "3152. 10. 27.",
                "type": "형사 경찰청 소방청 아무튼 대충 긴 글",
                "content": "거짓신고로 인한 경범죄 처벌법 위반죄와 위계에 의한 공무집행방해죄의 성립 요건 및 보호법익 / 거짓신고 행위가 원인이 되어 상대방인 공무원이 범죄가 발생한 것으로 오인함으로 인하여 공무원이 그러한 사정을 알았더라면 하지 않았을 대응조치를 취하기에 이른 경우, 위계에 의한 공무집행방해죄가 성립하는...",
            },
            {
                "title": "위계공무집행방해·경범죄처벌법위반·응급의료에관한법률위반·업무방해·공무집행방해·모욕",
                "date": "3152. 10. 27.",
                "type": "형사 경찰청 소방청 아무튼 대충 긴 글",
                "content": "거짓신고로 인한 경범죄 처벌법 위반죄와 위계에 의한 공무집행방해죄의 성립 요건 및 보호법익 / 거짓신고 행위가 원인이 되어 상대방인 공무원이 범죄가 발생한 것으로 오인함으로 인하여 공무원이 그러한 사정을 알았더라면 하지 않았을 대응조치를 취하기에 이른 경우, 위계에 의한 공무집행방해죄가 성립하는...",
            },
        ])
    }, [])

    const search = () => {
        navigate(`/search/${category}/${text}`);
    }

    const handleInputKey = (event) => {
        event.key === "Enter" && search();
        event.key === "Escape" && inputRef.current.blur();
    }
    
    const switchCategory = (category) => {
        navigate(`/search/${category}/${params.text}`);
        setCategory(category);
        setText(params.text); // TODO: 이거 상의해야될듯
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.searchContainer}>
                <SearchInput
                    onChange={(event) => setText(event.target.value)}
                    text={text}
                    onKeyDown={handleInputKey}
                    onClick={search}
                />
            </div>
            <div className={styles.categoryContainer}>
                <button
                    className={`${styles.category} ${category === "all" && styles.selected}`}
                    onClick={() => switchCategory("all")}
                >전체</button>

                <button
                    className={`${styles.category} ${category === "law" && styles.selected}`}
                    onClick={() => switchCategory("law")}
                >법령</button>

                <button
                    className={`${styles.category} ${category === "case" && styles.selected}`}
                    onClick={() => switchCategory("case")}
                >판례</button>
            </div>
            <div className={styles.contentContainer}>
                {searchContentList.map((element, index) => (
                    <SearchItem
                        key={index}
                        title={element.title}
                        date={element.date}
                        type={element.type}
                        content={element.content}
                    />
                ))}
            </div>
        </div>
    )
}
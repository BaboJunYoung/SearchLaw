import { useParams } from "react-router"
import styles from "./Search.module.css"
import searchImage from "../../assets/images/search.svg"
import { useEffect, useState } from "react";

export default function Search() {
    const params = useParams();
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        setCategory(params.category);
        setText(params.text);
    }, []);

    return (
        <div id={styles.mainContainer}>
            <div id={styles.searchContainer}>
                <input
                    id={styles.searchInput}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <img
                    id={styles.searchButton}
                    src={searchImage}
                />
            </div>
            <div id={styles.categoryContainer}>
                <div
                    className={category === "all" ? styles.selectedCategory : styles.category}
                >전체</div>

                <div 
                    className={category === "law" ? styles.selectedCategory : styles.category}
                >법령</div>

                <div
                    className={category === "case" ? styles.selectedCategory : styles.category}
                >판례</div>
            </div>
            <div id={styles.contentContainer}>
                
            </div>
        </div>
    )
}
import { useParams } from "react-router"
import styles from "./Search.module.css"
import searchImage from "../../assets/images/search.svg"

export default function Search() {

    const {category, text} = useParams();

    return (
        <div id={styles.mainContainer}>
            <div id={styles.searchContainer}>
                <input
                    id={styles.searchInput}
                    value={text}
                />
                <img
                    id={styles.searchButton}
                    src={searchImage}
                />
            </div>
            <div id={styles.categoryContainer}>
                <div
                    className={styles.category}
                    id={styles.categoryAll} 
                >전체</div>

                <div 
                    className={styles.category}
                    id={styles.categoryLaw}
                >법령</div>

                <div
                    className={styles.category}
                    id={styles.categoryCase}
                >판례</div>
            </div>
            <div id={styles.contentContainer}>

            </div>
        </div>
    )
}
import { useNavigate } from "react-router";
import styles from "./SearchItem.module.css"

export default function SearchItem(props) {
    const navigate = useNavigate();
    const title = props.title;
    const date = props.date;
    const type = props.type;
    const content = props.content;

    return (
        <button
            className={styles.mainContainer}
            onClick={() => navigate(`/detail/${title}`)}
        >
            <div className={styles.head}>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>{date}</div>
                <div className={styles.type}>{type}</div>
            </div>
            <div className={styles.content}>{content}</div>
        </button>
    )
}
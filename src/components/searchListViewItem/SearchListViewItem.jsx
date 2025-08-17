import { useNavigate } from "react-router";
import styles from "./SearchListViewItem.module.css"
import { makeDate } from "../../utils/time";

export default function SearchListView(props) {
    const navigate = useNavigate();

    const id = props.id;
    const title = props.title;
    const date = makeDate(props.date);
    const info = props.info;
    const content = props.content;

    const handleClick = (event) => {
        navigate(`/detail/${id}`)
    }

    return (
        <>
        <div className={styles.searchListViewItemContainer} onClick={handleClick}>
            <div className={styles.title}>{title}</div>
            
            <div className={styles.subtitle}>
                <div className={styles.date}>{date}</div>
                <div className={styles.info}>{info}</div>
            </div>

            <div className={styles.content}>{content}</div>
        </div>
        <div className={styles.horizon}/>
        </>
    )
}
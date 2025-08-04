import styles from "./SearchHistoryItem.module.css"
import closeImage from "../../../assets/images/close.svg"

export default function SearchHistoryItem(props) {
    const text = props.text;
    
    return (
        <>
        <div id={styles.container}>
            <div id={styles.text}>{text}</div>
            <img id={styles.closeImage} src={closeImage}/>
        </div>
        </>
    )
}
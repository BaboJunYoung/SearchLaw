import styles from "./SearchHistoryItem.module.css"
import closeImage from "../../../assets/images/close.svg"

export default function SearchHistoryItem(props) {
    const text = props.text;
    const setSearchedList = props.setSearchedList;
    const searchedList = props.searchedList;
    const index = props.index;

    const remove = () => {
        
        const removedList = searchedList.filter((_, i) => i !== index);
        setSearchedList(removedList);
        console.log("IN")
    }

    return (
        <label id={styles.container} onMouseDown={(e) => e.preventDefault()}>
            <div id={styles.text}>{text}</div>
            <img
                id={styles.closeImage} 
                src={closeImage}
                onClick={remove}
            />
        </label>
    )
}
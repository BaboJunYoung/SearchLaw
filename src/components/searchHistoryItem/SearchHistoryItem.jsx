import styles from "./SearchHistoryItem.module.css"
import closeImage from "../../assets/icons/close.svg"
import ImageButton from "../imageButton/ImageButton.jsx"

export default function SearchHistoryItem(props) {
    const text = props.text;
    const setSearchedList = props.setSearchedList;
    const searchedList = props.searchedList;
    const index = props.index;

    const goSearch = () => {
        console.log("아빠 안잔다.")
    }

    const remove = () => {
        const newList = searchedList.filter((e, i) => i !== index);
        setSearchedList(newList);
        // console.log(newList)
    }



    return (
        <botton
            className={styles.container}
            onMouseDown={(e) => e.preventDefault()}
            onClick={goSearch}
        >
            <span className={styles.text}>{text}</span>
            <ImageButton
                src={closeImage}
                sideLength="24px"
                onClick={remove}
            />
        </botton>
    )
}
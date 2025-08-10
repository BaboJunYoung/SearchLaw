import styles from "./SearchInput.module.css"
import ImageButton from "../imageButton/ImageButton.jsx"
import searchImage from "../../assets/icons/search.svg"

export default function SearchInput(props) {
    const text = props.text;
    const focusFunction = props.onFocus;
    const blurFunction = props.onBlur;
    const keyFunction = props.onKeyDown;
    const ref = props.ref;
    const changeFunction = props.onChange;
    const clickFunction = props.onClick;

    return (
        <div className={styles.container}>
            <input
                className={styles.searchInput}
                value={text}
                onFocus={focusFunction}
                onBlur={blurFunction}
                onKeyDown={keyFunction}
                ref={ref}
                onChange={changeFunction}
                placeholder="사례나 상황을 입력해주세요."
            />
            <ImageButton
                src={searchImage}
                sideLength="36px"
                onClick={clickFunction}
            />
        </div>
    )
}
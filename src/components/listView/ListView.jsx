import { useNavigate } from "react-router";
import styles from "./ListView.module.css"

import { search } from "../../utils/search";

export default function ListView(props) {
    const navigate = useNavigate();

    const icon = props.icon;
    const title = props.title;
    const widthWeight = props.widthWeight;
    const history = JSON.parse(localStorage.getItem("history")) ?? ["아직 없네요ㅠㅅㅠ"]; // 검색기록

    const handleClick = (text) => {
        search(navigate, text, "all");
    }

    return (
        <div className={styles.contentsContainer} style={{flexGrow: widthWeight}}>
            <header className={styles.header}>
                <img className={styles.icon} src={icon}/>
                <span className={styles.title}>{title}</span>
            </header>
            <ul className={styles.listView}>
                {history.map(item => (
                    <li
                        className={styles.listViewItem}
                        key={`${item.time}-${item.text}`}
                        onClick={() => handleClick(item.text)}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}
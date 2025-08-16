import styles from "./ListView.module.css"

export default function ListView(props) {
    const defaultHistory = [
        {
            text: "하나",
            time: "2009-01-15T040501",
        },
        {
            text: "둘",
            time: "2010-01-15T000000",
        },
        {
            text: "셋",
            time: "2011-01-15T000000",
        },
        {
            text: "이만오천칠백팔십칠억구천팔백이십삼만이천구십삼",
            time: "2023-01-15T000000",
        }
    ]

    const icon = props.icon;
    const title = props.title;
    const widthWeight = props.widthWeight;
    const history = JSON.parse(localStorage.getItem("history")) ?? defaultHistory; // 검색기록

    return (
        <div className={styles.contentsContainer} style={{flexGrow: widthWeight}}>
            <header className={styles.header}>
                <img className={styles.icon} src={icon}/>
                <span className={styles.title}>{title}</span>
            </header>
            <ul className={styles.listView}>
                {history.map(item => (
                    <li className={styles.listViewItem} key={`${item.time}-${item.text}`}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}
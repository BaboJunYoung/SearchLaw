import { useNavigate } from "react-router";
import styles from "./SearchItem.module.css"


export default function SearchItem(props) {
    const navigate = useNavigate();

    const title = props.title;
    const date = props.date;
    const lawSource = props.lawSourse;
    const content = props.content;
    
    const showDetail = () => {
        navigate(`/detail/${}`)
    }

    return (
        <div id={styles.mainContainer}>
            <div id={styles.title}>{title}</div>

        </div>
    )
}
import styles from "./Root.module.css"
import home from "../../assets/icons/home.svg"
import { Outlet, useNavigate } from "react-router";


export default function AuthRoot() {
    const navigate = useNavigate();

    return (
        <div className={styles.mainContainer}>
            <button
                className={styles.homeButton}
                onClick={() => navigate("/")}
            >
                <img src={home}/>
            </button>
            <Outlet/>
        </div>
    )
}
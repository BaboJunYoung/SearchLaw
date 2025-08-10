import styles from "./Root.module.css"
import profile from "../../assets/icons/profile.svg"
import { Outlet, useNavigate } from "react-router";


export default function ProfileRoot() {
    const navigate = useNavigate();


    return (
        <div className={styles.mainContainer}>
            <button
                className={styles.profileButton}
                onClick={() => navigate("/login")}
            >
                <img src={profile}/>
            </button>
            <Outlet/>
        </div>
    )
}
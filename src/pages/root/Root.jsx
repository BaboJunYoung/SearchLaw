import styles from "./Root.module.css"
import profile from "../../assets/images/profile.svg"
import { Outlet, useNavigate } from "react-router";

export default function Root() {
    const navigate = useNavigate();


    return (
        <div
            id={styles.mainContainer}
        >
            <img
                id={styles.profileButton} 
                alt="로그인"
                src={profile}
                onClick={()=>navigate("/login")}
            />
            <Outlet/>
        </div>
    )
}
import styles from "./Root.module.css"

import profileIcon from "../../assets/icons/search.svg"

export default function Root() {

    return (
        <div className={styles.screenContainer}>
            <img src={profileIcon}/>
        </div>
    )
}
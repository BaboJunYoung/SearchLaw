import styles from "./Home.module.css"
import SearchInput from "../../components/searchInput/SearchInput"
import ListView from "../../components/listView/ListView"

import logoIcon from "../../assets/icons/logo.svg"
import clockIcon from "../../assets/icons/clock.svg"
import graphIcon from "../../assets/icons/graph.svg"

export default function Home() {

    return (
        <div className={styles.screenContainer}>
            <div className={styles.mainContainer}>
                <header className={styles.header}>
                    <img className={styles.icon} src={logoIcon}/>
                    <div className={styles.headerText}>나를 위한 딱 맞는 판례 데이터 분석</div>
                </header>
                <footer className={styles.footer}>
                    <SearchInput/>
                    <div className={styles.listViewContainer}>
                        <ListView
                            className={styles.history}
                            icon={clockIcon}
                            title="최근 검색어"
                            widthWeight="0"
                        />
                        <ListView
                            className={styles.popular}
                            icon={graphIcon}
                            title="지금 사람들이 많이 찾고 있어요"
                            widthWeight="1"
                        />
                    </div>
                </footer>
            </div>
        </div>
    )
}
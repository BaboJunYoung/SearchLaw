import { useParams } from "react-router"
import styles from "./Detail.module.css"
import lawViewStyles from "./LawView.module.css"
import { useEffect, useState } from "react";
import { makeDate } from "../../utils/time";
import { apiBaseUrl } from '../../api/api';
import axios from "axios";

export default function Detail() {
    const params = useParams();
    const lawId = params.lawId;
    const componentRefs = useRef([]);

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [info, setInfo] = useState(""); // 소관부처같은거

    const [lawList, setLawList] = useState([]);
    /*
      lawList = [
        {
          title : "제 1조 목적",
          content : "제 1조 목적  이 법은 화재, 재난ㆍ재해 및 테러, 그 밖의 위급한 상황에서 119구조ㆍ구급의 효율적 운영에 관하여 필요한 사항을 규정함으로써 국가의 구조ㆍ구급 업무 역량을 강화하고 국민의 생명ㆍ신체 및 재산을 보호하며 삶의 질 향상에 이바지함을 목적으로 한다."
        },
        Golang 세계 최고
        ...
      ]
    */

    const [lookingChapter, setLookingChapter] = useState("1");
    const [sideBarItemList, setSideBarItemList] = useState([]);

    useEffect(() => {
        async function getData() {
          const data = await axios.get(`${apiBaseUrl}/legal/detail/${lawId}`).then(response => response.data);
          console.log(data);

          setTitle(data["법령명_한글"])
          setDate(makeDate(data["시행일자"]))
          setInfo(data["소관부처이름"])
          setLawList(data["조문"])

          componentRefs.current = data["조문"].map((_, i) => componentRefs.current[i] ?? React.createRef());
        }
        getData();

        // async function 
        // window.addEventListener("scroll", )

    }, []);

    return (
        <div className={styles.screenContainer}>

            <div className={styles.sideBar}>
                {sideBarItemList.map((sideBarItem) => (
                  <div className={`${styles.sideBarItem} ${sideBarItem === lookingChapter && styles.lookingSideBarItem}`}
                  >{sideBarItem}조</div>
                ))}
            </div>

            <div className={styles.contentView}>
                <div className={styles.title}>{title}</div>
                
                <div className={styles.infoContainer}>
                    <div className={styles.date}>시행일자 : {date}</div>
                    <div className={styles.info}>소관부처 : {info}</div>
                </div>

                <div className={styles.lawContainer}>
                    {lawList.length !== 0 && lawList.map(element => (
                      <LawView
                        key={element["조문내용"]}
                        number={element["조문번호"]}
                        title={element["조문제목"]}
                        content={element["조문내용"]}
                      />
                    ))}
                </div>
            </div>
        </div> 
    )
} 


function LawView(props) {
  const number = props.number; // 1
  const title = props.title; // 목적
  const content = props.content; // 제1조(목적) 이 법은 ...
    
    return (
        <div className={lawViewStyles.lawViewContainer}>
          <div className={lawViewStyles.title}>{`제 ${number}조 ${title}`}</div>
          <div className={lawViewStyles.content}>{content}</div>
        </div>
    )
}
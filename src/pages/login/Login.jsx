import styles from "./Login.module.css"
import AuthInput from "../../components/authInput/AuthInput"
import AuthButton from "../../components/authButton/AuthButton"
import { useState } from "react"
import { useNavigate } from "react-router"

export default function Login(props) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log("login...")
  }

  return (
    <div className={styles.highestContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.loginText}>로그인</div>

        <div className={styles.contentContainer}>
          <div className={styles.inputContainer}>
            <AuthInput
              text="아이디"
              type="text"
              placeholder="아이디를 입력해주세요."
              onChange={(event) => setId(event.target.value)}
            />
            <AuthInput
              text="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <AuthButton
            text="로그인"
            onClick={login}
          />
        </div>
        <button
          className={styles.signup}
          onClick={() => navigate("/signup")}
        >회원가입</button>
      </div>
    </div>
  )
}
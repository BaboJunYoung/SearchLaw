import styles from "./Signup.module.css"
import AuthInput from "../../components/authInput/AuthInput"
import AuthButton from "../../components/authButton/AuthButton"
import { useState } from "react"
import { useNavigate } from "react-router"

export default function Signup(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const signup = () => {
    console.log("signup...")
  }

  return (
    <div className={styles.highestContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.loginText}>회원가입</div>

        <div className={styles.contentContainer}>
          <div className={styles.inputContainer}>
            <AuthInput
              text="이름"
              type="text"
              placeholder="이름을 입력해주세요."
              onChange={(event) => setName(event.target.value)}
            />
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
            <AuthInput
              text="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={(event) => setPasswordConfirm(event.target.value)}
            />
          </div>

          <AuthButton
            text="회원가입"
            onClick={signup}
          />
        </div>
        <button
          className={styles.signup}
          onClick={() => navigate("/login")}
        >로그인</button>
      </div>
    </div>
  )
}
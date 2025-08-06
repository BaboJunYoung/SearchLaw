import React from "react";
import "./auth.css";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-bg">
      <div className="auth-form">
        <h2 className="auth-title">로그인</h2>
        <div className="auth-field">
          <label htmlFor="login-id">아이디</label>
          <input
            id="login-id"
            type="text"
            placeholder="아이디를 입력해주세요."
            className="auth-input"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="login-password">비밀번호</label>
          <input
            id="login-password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            className="auth-input"
          />
        </div>
        <button className="auth-btn">로그인</button>
        <div className="auth-link">
          <button onClick={() => navigate("/signup")}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
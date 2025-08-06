import React from "react";
import "./auth.css";

function Signup() {
  return (
    <div className="auth-bg">
      <div className="auth-form">
        <h2 className="auth-title">회원가입</h2>
        <div className="auth-field">
          <label htmlFor="signup-name">이름</label>
          <input
            id="signup-name"
            type="text"
            placeholder="이름을 입력해주세요."
            className="auth-input"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-id">아이디</label>
          <input
            id="signup-id"
            type="text"
            placeholder="아이디를 입력해주세요."
            className="auth-input"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-password">비밀번호</label>
          <input
            id="signup-password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            className="auth-input"
          />
        </div>
        <div className="auth-field">
          <label htmlFor="signup-password-check">비밀번호 확인</label>
          <input
            id="signup-password-check"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            className="auth-input"
          />
        </div>
        <button className="auth-btn">회원가입</button>
        <div className="auth-link">
          <a href="/login">로그인</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
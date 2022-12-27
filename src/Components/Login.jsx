import React from "react";

export default function Login() {
  return (
    <div className="container">
      <form className="login-form">
        <div className="mb-3">
          <label for="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Input_email"
            aria-describedby="emailHelp"
            placeholder="@gmail.com"
          />
          <div id="emailHelp" className="form-text">
            귀하의 이메일을 다른 누구와도 공유하지 않습니다.
          </div>
        </div>
        <div className="mb-3">
          <label for="InputPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="InputPassword" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="Check"
            checked
          />
          <label className="form-check-label" for="Check_remember">
            나를 기억해줘
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          전송하기
        </button>
      </form>
    </div>
  );
}

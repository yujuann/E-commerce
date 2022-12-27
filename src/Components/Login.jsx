import React from "react";

export default function Login() {
  return (
    <div className="container">
      <form className="login-form">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="@gmail.com"
          />
          <div id="emailHelp" className="form-text">
            귀하의 이메일을 다른 누구와도 공유하지 않습니다.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked
          />
          <label className="form-check-label" for="exampleCheck1">
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

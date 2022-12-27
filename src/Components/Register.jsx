import React from "react";

function Register() {
  return (
    <div>
      <div className="register">
        <form>
          <div className="mb-3">
            <label for="userName" className="form-label">
              이름
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="userName"
              aria-describedby="userName"
            />
            <label for="phone" className="form-label">
              연락처
            </label>
            <input
              type="tel"
              className="form-control mb-3"
              id="phone"
              aria-describedby="phone"
            />
            <label for="exampleInputEmail1" className="form-label">
              Email 주소
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              비밀번호
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="exampleInputPassword1"
            />
            <label for="exampleConfirmtPassword1" className="form-label">
              비밀번호 확인하기
            </label>
            <input
              type="confirm-password"
              className="form-control"
              id="exampleConfirm    Password1"
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
              로그인 등록하기
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            전송하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

import axios from "axios";
import { useState } from "react";

const ResetPassword = (props) => {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");
  const [alert, setAlert] = useState("");

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setErrorPassword("password tidak boleh kosong");
    } else {
      setErrorPassword("");
    }
  };

  const onChangePasswordConfirm = (e) => {
    const value = e.target.value;
    setPasswordConfirm(value);
    if (!value) {
      setErrorPasswordConfirm("password confirm tidak boleh kosong");
    } else if (password !== value) {
      setErrorPasswordConfirm("password tidak cocok");
    } else {
      setErrorPasswordConfirm("");
    }
  };

  const submitResetPassword = () => {
    const data = { password: password, token: props.match.params.token };
    axios.post("http://localhost:3001/resetpassword", data).then((res) => {
      if (res) {
        setPassword("");
        setPasswordConfirm("");
        setAlert("password berhasil diganti");
        setTimeout(() => {
          setAlert("");
        }, 3000);
      }
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 class="card-title">Register</h5>
              {alert && <div className="alert alert-success">{alert}</div>}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                />
                {errorPassword && (
                  <div className="text-danger">{errorPassword}</div>
                )}
              </div>
              <div className="form-group">
                <label>Password Confirm</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password Confirm"
                  value={passwordConfirm}
                  onChange={onChangePasswordConfirm}
                />
                {errorPasswordConfirm && (
                  <div className="text-danger">{errorPasswordConfirm}</div>
                )}
              </div>
              <button
                className="btn btn-primary btn-block"
                onClick={submitResetPassword}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

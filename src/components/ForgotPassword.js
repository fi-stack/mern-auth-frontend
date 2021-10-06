import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const submitForgotPassword = () => {
    if (!email) {
      setError("email wajib diisi");
    } else {
      axios
        .post("http://localhost:3001/forgotpassword", { email: email })
        .then(res => {
          setEmail("");
          setAlert("silahkan cek email anda");
          setTimeout(() => {
            setAlert("");
          }, 3000);
        });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reset Password</h5>
              {alert && <div className="alert alert-success">{alert}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={submitForgotPassword}
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

export default ForgotPassword;

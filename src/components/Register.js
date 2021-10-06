import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");

  const onChangeUsername = e => {
    const value = e.target.value;
    setUsername(value);
    setError("");
  };

  const onChangeEmail = e => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const onChangePassword = e => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const submitRegister = () => {
    const data = {
      username: username,
      email: email,
      password: password
    };
    axios
      .post("http://localhost:3001/register", data)
      .then(result => {
        if (result) {
          if (result.data) {
            setUsername("");
            setEmail("");
            setPassword("");
            setAlert(result.data.message);
            setTimeout(() => {
              setAlert("");
            }, 3000);
          }
        }
      })
      .catch(e => {
        setError(e.response.data.message);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 class="card-title">Register</h5>
              {error && <div className="alert alert-danger">{error}</div>}
              {alert && <div className="alert alert-success">{alert}</div>}
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={onChangeUsername}
                />
              </div>
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
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <button
                className="btn btn-primary btn-block"
                onClick={submitRegister}
              >
                Register
              </button>
              <div>
                <Link to="/login">I already have a user</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;

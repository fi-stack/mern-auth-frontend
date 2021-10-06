import { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const onChangeUsernameOrEmail = (e) => {
    const value = e.target.value;
    setUsernameOrEmail(value);
    setError("");
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const submitLogin = () => {
    const data = {
      usernameOrEmail: usernameOrEmail,
      password: password,
    };
    axios
      .post("http://localhost:3001/login", data)
      .then((result) => {
        if (result) {
          localStorage.setItem("token", result.data.token);
          setRedirect(true);
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  return (
    <Fragment>
      {redirect && <Redirect to="/dashboard" />}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Login</h5>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={usernameOrEmail}
                    onChange={onChangeUsernameOrEmail}
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
                  onClick={submitLogin}
                >
                  Login
                </button>
                <div>
                  <Link to="/register">Register a new user</Link>
                </div>
                <div>
                  <Link to="/forgotpassword">Forgot Password</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;

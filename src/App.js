import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/resetpassword/:token" component={ResetPassword} />
      </Switch>
    </div>
  );
}

export default App;

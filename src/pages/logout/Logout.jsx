import "./logout.css";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Thapar Network system</h3>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <span className="loginForgot">You have been logged out</span>
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logout;

// import { LOGO_URL } from "../utils/contant";
import {LOGO_URL1} from "../utils/contant";
import { useState } from "react";
import { Link } from "react-router-dom";

//Header
const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("render all header component")
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL1} />  
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

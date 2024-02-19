// import { LOGO_URL } from "../utils/contant";
import {LOGO_URL1} from "../utils/contant";
import { useState } from "react";
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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

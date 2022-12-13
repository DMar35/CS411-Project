import "./styles.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
    return (
        <div className="header">
        <ul>
          <li>
            <a href="/home" className="option">Home</a>
          </li>
          <li className="option">
            <a href="/interested" className="option">My Account</a>
          </li>
          <li className="option">
            <a href="/spotify" className="option">Explore Artists</a>
          </li>
        </ul>
    </div>
  );
};
export default NavBar;

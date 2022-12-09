import "./styles.css"
import React from "react";
// import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";


const NavBar = () => {

    return (
        <div className="header">
      {/* <div className="logo-nav"> */}
        {/* <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div> */}

        <ul>
          <li>
            <a href="/home" className="option">Home</a>
          </li>
          <li className="option">
            <a href="/account" className="option">My Account</a>
          </li>
          <li className="option">
            <a href="/interested" className="option">Interested</a>
          </li>
        </ul>
      {/* </div> */}
      {/* <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div> */}
    </div>
  );
};
        // <nav className="test">
        //     <ul className="test">
        //         <li>
        //             <a href="/home">Home</a>
        //         </li>
        //         <li>
        //             <a href="/account">My Account</a>
        //         </li>
        //     </ul>
        // </nav>
//     )
// }
export default NavBar
import "./styles.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";


const NavBar = () => {

    return (
        <div className="header">
        <ul>
          <li>
            <a href="/home" className="option">Home</a>
          </li>
          <li className="option">
            <a href="/account" className="option">My Account</a>
          </li>
          <li className="option">
            <a href="/spotify" className="option">Explore Artists</a>
          </li>
        </ul>
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
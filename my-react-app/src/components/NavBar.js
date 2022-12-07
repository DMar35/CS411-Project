import "./styles.css"
import React from "react";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    return (
        <nav className="test">
            <ul className="test">
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="#">My Account</a>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar
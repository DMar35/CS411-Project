import "./styles.css"
import React from "react";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    return (
        // <Navbar expand="lg" variant="light" bg="light">
        //     <Container>
        //         <Navbar.Brand href="#">Navbar</Navbar.Brand>
        //     </Container>
        // </Navbar>
        <nav className="test">
      <ul className="test">
        <li>
          <a href="/login">Home</a>
        </li>
        <li>
          <a href="/register">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    )
}
export default NavBar
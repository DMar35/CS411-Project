import "./styles.css"
import React from "react";
// import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        // <Navbar expand="lg" variant="light" bg="light">
        //     <Container>
        //         <Navbar.Brand href="#">Navbar</Navbar.Brand>
        //     </Container>
        // </Navbar>

        // <Navbar expand="lg">
        //     <Navbar.Brand href="/">Tutorial</Navbar.Brand>
        // <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        // <Form className="form-center">
        //     <FormControl type="text" placeholder="Search" className="" />
        // </Form>
        // <Navbar.Collapse id="basic-navbar-nav">
        //     <Nav className="ml-auto">
        //         <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
        //     </Nav>
        // </Navbar.Collapse>
        // </Navbar>

    //     <>
    //   <Navbar bg="light">
    //     <Container>
    //       <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    //     </Container>
    //   </Navbar>
    //   </>
        <div className="navbar">
            <span className="main">Welcome Back</span>
        </div>
    )
}
export default NavBar
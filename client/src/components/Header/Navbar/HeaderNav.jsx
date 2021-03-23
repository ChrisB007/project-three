import React from 'react';
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';

function HeaderNavbar() {
    return (
        <Navbar id="navbg" expand="lg" light bg="light" mb="3">
        <Navbar.Brand href="#"><img id="logo" src="images/logotwo.png" alt="logo" /></Navbar.Brand>
        <Navbar.Toggler target="#navbarColor1" />
        <Collapse navbar id="navbarColor1">
          <Nav pills flex="column sm-row" className="navclass">
            <Nav.ItemLink active href="#">Main</Nav.ItemLink>
            <Nav.ItemLink href="#">Ask a Techie</Nav.ItemLink>
            <Nav.ItemLink href="#">Jobs</Nav.ItemLink>
            <Nav.ItemLink href="#">Sign up | Login</Nav.ItemLink>
         </Nav>
        </Collapse>
      </Navbar>
    )
}

export default HeaderNavbar;

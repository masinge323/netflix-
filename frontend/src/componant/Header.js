import React from 'react'
import {Navbar, Nav, Button, FormControl} from 'react-bootstrap'
import '../style/Header.css' 
import '../style/bootstrap.min.css'

const Header = () => {
    return (
<Navbar bg="light" expand="lg">
    <Navbar.Brand href="/" >NETFLIX+</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        <Nav className="mr-auto">
            <Nav.Link href="/subcribe">Subscribe</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
       
    </Navbar.Collapse>
</Navbar>
    )
}

export default Header

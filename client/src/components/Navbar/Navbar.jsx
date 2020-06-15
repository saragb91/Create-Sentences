import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
    
    return (     
    
    <Navbar bg="white" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as="div"> <Link to="/" className='navLink'>Inicio</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/new" className='navLink'>Añada una frase</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/allSentences" className='navLink'>Todas las frases</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/getFavorites" className='navLink'>Favoritos</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
}
 
export default NavBar;
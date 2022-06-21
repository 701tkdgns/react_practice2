import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Psh_Nav.css'

const Psh_Nav = () => {
    return (
        <Navbar expand="lg" bg="*" variant="dark" fixed='top'>
            <Container>
                <Navbar.Brand href=".">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-1 mb-lg-0 ms-auto">
                        <Nav.Link className='link-name' href="#home">Home</Nav.Link>
                        <Nav.Link className='link-name' href="#services">Services</Nav.Link>
                        <Nav.Link className='link-name' href="#projects">Projects</Nav.Link>
                        <Nav.Link className='link-name' href="#contact">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Psh_Nav
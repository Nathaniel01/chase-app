import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    const IMG_SRC = "https://www.ray-ban.com/rbstatichtml/assets/images/red-logo.svg"
    return (
        <Navbar sticky='top' style={{ background: '#B99595' }}>
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={IMG_SRC}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Ray Ban
                </Navbar.Brand>
                <Container>
                    <Row className='row justify-content-center'>
                        <Nav fill='true' >
                            <Nav.Link href="#sun_glasses" style={{ color: '#FFFFFF' }}>Sun Glasses</Nav.Link>
                            <Nav.Link href="#eye_glasses" style={{ color: '#FFFFFF' }}>Eye Glasses</Nav.Link>
                            <Nav.Link href="#eye_glasses" style={{ color: '#FFFFFF' }}>Prescription</Nav.Link>
                            <Nav.Link href="#eye_glasses" style={{ color: '#FFFFFF' }}>Ray-Ban Stories</Nav.Link>
                        </Nav>
                    </Row>
                </Container>
            </Navbar.Collapse >

        </Navbar>

    )
}

export default NavigationBar
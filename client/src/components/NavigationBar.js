import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
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
                <Nav fill='true' className='row justify-content-around'>
                    <Nav.Item href="#sun_glasses" class="col-4" style={{ textAlign: 'center' }}>Sun Glasses</Nav.Item>
                    <Nav.Item href="#eye_glasses" class="col-4" style={{ textAlign: 'center' }}>Eye Glasses</Nav.Item>
                    <Nav.Item href="#eye_glasses" class="col-4" style={{ textAlign: 'center' }}>Prescription</Nav.Item>
                    <Nav.Item href="#eye_glasses" class="col-4" style={{ textAlign: 'center' }}>Ray-Ban Stories</Nav.Item>
                    <Nav.Item href="#eye_glasses" class="col-4" style={{ textAlign: 'center' }}>Ray-Ban Stories</Nav.Item>
                </Nav>
            </Navbar.Collapse >

        </Navbar>

    )
}

export default NavigationBar
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal'
import { UserForm } from "./UserForm";
import { useState } from 'react'


const Signup = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <Nav>
                <p onClick={() => setShowModal(true)} style={{ textAlign: 'center' }}>50% off easter sales. <span style={{ cursor: 'pointer', color: 'red' }}>Click here</span> to register now</p>
            </Nav>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Registeration Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Signup
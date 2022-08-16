import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export const UserForm = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        console.log('submit')
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            console.log(form)
            console.log(e.target)

        }
        setValidated(true);
        const response = {
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            email: form.email.value,
            city: form.city.value,
            state: form.state.value,
            zip: form.zip.value,
            wanted_collection: form.collection.value
        }

        saveToMongo(response)
    }

    const saveToMongo = (response) => {
        axios.post('http://localhost:3001/test', response)
            .then((response) => {
                console.log('the response', response)
            })
            .catch((e) => {
                console.log(e)
            })
    }



    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group md="3" controlId="first_name">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                    />
                </Form.Group>
                <Form.Group md="3" controlId="last_name">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                    />
                </Form.Group>
                <Form.Group md="3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="email"
                            placeholder="email"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a valid email address.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group md="3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="3" controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="3" controlId="zip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group md="3" controlId="collection">
                    <Form.Label>Wanted RayBan Collection</Form.Label>
                    <Form.Control type="text" placeholder="e.g. Hexagonal Sunglasses Collection" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Collection
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}
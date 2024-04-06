import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Register() {
    return (
        <Container fluid className="my-5" style={{ backgroundColor: 'transparent', color: 'white' }}>
            <Row className="justify-content-center">
                <Col md={8} sm={12}>
                    <div className="card p-4">
                        <h2 className="text-center mb-4" style={{ fontFamily: 'Racing Sans One', fontSize: '2.5rem'}}>Register</h2>
                        <Form>
                            <Form.Group controlId="formBasicName" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Name</Form.Label>
                                <Form.Control type="text" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} placeholder="Enter your name" className="input-field" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Phone Number</Form.Label>
                                <Form.Control type="tel" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} placeholder="Enter your phone number" className="input-field" />
                            </Form.Group>

                            <Form.Group controlId="formBasicGender" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Gender</Form.Label>
                                <Form.Control as="select" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} className="input-field">
                                    <option>Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Email address</Form.Label>
                                <Form.Control type="email" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} placeholder="Enter your email" className="input-field" />
                            </Form.Group>

                            <Form.Group controlId="formBasicAge" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Age</Form.Label>
                                <Form.Control type="number" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} placeholder="Enter your age" className="input-field" />
                            </Form.Group>

                            <Form.Group controlId="formBasicDOB" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Date of Birth</Form.Label>
                                <Form.Control type="date" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} className="input-field" />
                            </Form.Group>

                            {/* Additional fields can be added as needed */}

                            <Button variant="dark" type="submit" className="mt-3" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>
                                Register Now
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;

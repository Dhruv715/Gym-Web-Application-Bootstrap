import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid className="my-5" style={{ backgroundColor: 'transparent', color: 'white' }}>
            <Row className="justify-content-center">
                <Col md={8} sm={12}>
                    <div className="card p-4">
                        <h2 className="text-center mb-4" style={{ fontFamily: 'Racing Sans One', fontSize: '2.5rem'}}>Contact Us</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Email address</Form.Label>
                                <Form.Control style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} type="email" placeholder="Enter email" className="input-field" />
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Phone Number</Form.Label>
                                <Form.Control style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} type="tel" placeholder="Enter phone number" className="input-field" />
                            </Form.Group>

                            <Form.Group controlId="formBasicMessage" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Message</Form.Label>
                                <Form.Control as="textarea" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem',resize:'none'}} rows={3} placeholder="Enter your message" className="input-field" />
                            </Form.Group>

                            <Button variant="dark" type="submit" className="mt-3" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

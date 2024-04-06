import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
    return (
        <Container fluid className="my-5" style={{ backgroundColor: 'transparent', color: 'white' }}>
            <Row className="justify-content-center">
                <Col md={8} sm={12}>
                    <div className="card p-4">
                        <h2 className="text-center mb-4" style={{ fontFamily: 'Racing Sans One', fontSize: '2.5rem'}}>Login</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Email address</Form.Label>
                                <Form.Control style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} type="email" placeholder="Enter email" className="input-field" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className='my-4'>
                                <Form.Label style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Password</Form.Label>
                                <Form.Control style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}} type="password" placeholder="Enter password" className="input-field" />
                            </Form.Group>

                            <Button variant="dark" type="submit" className="mt-3" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;

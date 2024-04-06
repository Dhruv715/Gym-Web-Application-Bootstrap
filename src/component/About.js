import { Container, Row, Col, Button } from 'react-bootstrap';

function About() {
    return (
        <Container fluid className="my-5">
            <Row className="justify-content-center">
                <Col md={8} sm={12} lg={8} className='text-center'>
                    <h2 className="text-center mb-4" style={{ fontFamily: 'Racing Sans One', fontSize: '2.5rem' }}>About Us</h2>
                    <p className="text-justify  mx-auto" style={{ fontFamily: 'Racing Sans One', fontSize: '1.2rem' }}>
                        Welcome to Ultra Gym, where fitness meets lifestyle! Our mission is to inspire and empower individuals to lead healthier lives by providing top-quality fitness facilities and personalized training programs.
                    </p>
                    <p className="text-justify mx-auto" style={{ fontFamily: 'Racing Sans One', fontSize: '1.2rem' }}>
                        At Ultra Gym, we believe that fitness is not just about physical exercise, but also about mental well-being. That's why we offer a wide range of fitness classes, state-of-the-art equipment, and expert trainers to help you achieve your goals, whether you're a beginner or an experienced athlete.
                    </p>
                    <p className="text-justify mx-auto" style={{ fontFamily: 'Racing Sans One', fontSize: '1.2rem' }}>
                        Our gym is more than just a place to work out – it's a community where members support and motivate each other to be their best selves. Join us today and start your journey to a healthier, happier you!
                    </p>
                    <Button variant="dark" className="my-2" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Register Now</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default About;

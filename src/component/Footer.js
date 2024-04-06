import { Col, Row, Container } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid style={{ backgroundColor: 'black', color: 'rgb(173, 173, 173)' }} className="py-5 px-5">
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={4} className="text-center mb-3">
          <h1 className="my-1" style={{ cursor:'pointer',fontFamily: 'Racing Sans One', fontSize: '1.5rem', textTransform: 'uppercase' }}> Ultra Gym</h1>
        </Col>
        <Col sm={12} md={6} lg={4} className="text-center mb-3">
          <h1 className="my-1" style={{cursor:'pointer', fontFamily: 'Racing Sans One', fontSize: '1.5rem', textTransform: 'uppercase' }}>About List</h1>
          <ul type="square" style={{listStyle:'none',cursor:'pointer'}}>
            <li className="my-1" style={{ fontFamily: 'Racing Sans One', fontSize: '1rem' }}>Membership</li>
            <li className="my-1" style={{ fontFamily: 'Racing Sans One', fontSize: '1rem' }}>Couple Package</li>
            <li className="my-1" style={{ fontFamily: 'Racing Sans One', fontSize: '1rem' }}>Full Year Package</li>
            <li className="my-1" style={{ fontFamily: 'Racing Sans One', fontSize: '1rem' }}>1st Free Trial</li>
            <li className="my-1" style={{ fontFamily: 'Racing Sans One', fontSize: '1rem' }}>Personal Training Sessions</li>
            <li className="my-1" style={{ fontFamily: 'Racing Sans One', fontSize: '1rem' }}>Group Fitness Classes</li>
            <li className="my-1" style={{ fontFamily: 'Racing Sans One', fontSize: '1rem' }}>Nutrition Consultation</li>
            <li className="my-1" style={{ fontFamily: 'Racing Sans One', fontSize: '1rem' }}>Special Events and Workshops</li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={4} className="text-center mb-3">
          <h1 className="my-1 mb-3" style={{cursor:'pointer', fontFamily: 'Racing Sans One', fontSize: '1.5rem', textTransform: 'uppercase' }}>Social Media</h1>
          <div className="icons">
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-circle-line"></i>
            <i className="ri-twitter-line"></i>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Footer;

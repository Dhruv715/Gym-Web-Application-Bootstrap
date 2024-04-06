import { Col, Row, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
function Section1(){
    return(
        <>
<Container className="my-5">
      
      <Row className="shadow-lg p-5" >
        <Col sm={12} lg={6} md={12}>
        <p className="firstpara h5 mt-5 my-2">
        YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE. YOUR PERSONAL TRAINING SHOULD REFLECT THAT!
        </p>
        <h1 className="h1 my-2" style={{ fontFamily:' Racing Sans One',fontSize:'3rem'}}>CERTIFIED PERSONAL TRAINERS</h1>
        <p className="textpara h6 my-4">
        Get fit fast with Waves certified personal trainers. Enjoy cardio, strength, and weight training with top equipment. Join now and make 
        </p>
        <Button variant="dark" className="my-2" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Register Now</Button>
        </Col>
        <Col sm={12} lg={6} md={12} >
                <img  src="https://elevatesyracuse.com/wp-content/uploads/2019/04/AdobeStock_95873599-1.jpeg" alt=""  className="img-fluid"/>
        </Col>
       
      </Row>
    </Container>
        </>
    )
}
export default Section1;
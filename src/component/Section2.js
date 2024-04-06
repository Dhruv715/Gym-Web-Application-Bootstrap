import { Col, Row, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
function Section2(){
    return(
        <>
<Container className="my-5">
      
      <Row className="shadow-lg p-5" >
      <Col sm={12} lg={6} md={12} >
                <img src="https://t4.ftcdn.net/jpg/03/33/91/97/360_F_333919715_R1mDUWPgwB2CRvSCNnvnmtn64gPY40ZL.jpg" alt=""  className="img-fluid"/>
        </Col>
        <Col sm={12} lg={6} md={12}>
        <p className="firstpara h5 mt-5 my-2">
        EXPERIENCE THE FITNESS WAVE
        </p>
        <h1 className="h1 my-2" style={{ fontFamily:' Racing Sans One',fontSize:'3rem'}}>1500 SQ.FT OPEN AIR CROSSFIT STUDIO</h1>
        <p className="textpara h6 my-4">
        Our rooftop open air CrossFit studio will help you push your limits and get you to your fitness goals.
        </p>
        <Button variant="dark" style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Join Today</Button>
        </Col>
        
       
      </Row>
    </Container>
        </>
    )
}
export default Section2;
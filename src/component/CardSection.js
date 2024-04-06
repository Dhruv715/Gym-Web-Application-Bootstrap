import { Col, Row, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardSection() {
  return (
    <>

      <div>
      <Container className="my-5 " >
      <h1 className="text-center h4" style={{ fontFamily:' Racing Sans One',fontSize:'2rem'}}>Type Of Exercise</h1>
        <Row className="d-flex justify-content-between align-items-center  " > 
          <Col sm={12} md={6} lg={4} className="my-3 d-flex justify-content-center">
            <Card className="shadow-lg" style={{ width: "18rem",border:'1px solid white' }}>
              <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/70/27/57/360_F_270275705_Ja0uASDTp5tCasU2amYLOMvUBT0Qv7m5.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>
Pushup</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark" style={{ fontFamily:' Racing Sans One',fontSize:'.9rem'}}>Show Exrecise</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}  className="my-3 d-flex justify-content-center">
            <Card className="shadow-lg" style={{ width: "18rem" ,border:'1px solid white'}}>
              <Card.Img variant="top" src="https://assets.sweat.com/shopify_articles/images/010/005/285/original/BackToGymSWEATf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801362" />
              <Card.Body>
                <Card.Title style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Bench press</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark" style={{ fontFamily:' Racing Sans One',fontSize:'.9rem'}}>Show Exrecise</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}  className="my-3 d-flex justify-content-center">
            <Card className="shadow-lg" style={{ width: "18rem",border:'1px solid white' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D" />
              <Card.Body>
                <Card.Title style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Lifting</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark" style={{ fontFamily:' Racing Sans One',fontSize:'.9rem'}}>Show Exrecise</Button>
              </Card.Body>
            </Card>
          </Col>
        
          <Col sm={12} md={6} lg={4}  className="my-3 d-flex justify-content-center">
            <Card className="shadow-lg" style={{ width: "18rem",border:'1px solid white' }}>
              <Card.Img variant="top" src="https://www.verywellfit.com/thmb/ciQzUB302Z4cmBfiKmhcs0lU7oE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VWFit-how-to-do-dumbbell-rows-7152079-f04fcc66f53940629152b8d008f9045b.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>
                Dumbbell row</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark" style={{ fontFamily:' Racing Sans One',fontSize:'.9rem'}}>Show Exrecise</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}  className="my-3 d-flex justify-content-center">
            <Card className="shadow-lg" style={{ width: "18rem" ,border:'1px solid white'}}>
              <Card.Img variant="top" src="https://www.verywellfit.com/thmb/RME17zorpHqz5CI_XW4lkFwTd8A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/young-female-athlete-lifting-kettle-bell-while-crouching-in-gym-1284730860-a3f1a3d2b2d14311bcbf4754f5e0effa.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Squat</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark" style={{ fontFamily:' Racing Sans One',fontSize:'.9rem'}}>Show Exrecise</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}  className="my-3 d-flex justify-content-center">
            <Card className="shadow-lg" style={{ width: "18rem",border:'1px solid white' }}>
              <Card.Img variant="top" src="https://qph.cf2.quoracdn.net/main-qimg-1309a985b2bc650441a49ba5b257b8ba-lq" />
              <Card.Body>
                <Card.Title style={{ fontFamily:' Racing Sans One',fontSize:'1.2rem'}}>Deadlift</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark" style={{ fontFamily:' Racing Sans One',fontSize:'.9rem'}}>Show Exrecise</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}
export default CardSection;

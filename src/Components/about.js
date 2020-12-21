import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import image1 from '../Images/bhairavi.jpg';
import image2 from '../Images/gautami.jpeg';


import Image from 'react-bootstrap/Image' 
import teamimage from '../Images/team.jpg';
import '../App.css';
const Example = (props) => {
  return (
    <div>
<Container>
<Row style={{marginTop:"5%"}}>
  <Col> <h3 style={{color:'blue'}}>Our Mission</h3>
      <h5>
        The website is designed to detect the presence of parkinson's Diesease.
      </h5>
  </Col>
  <Col>
         <Image src={teamimage}  style={{borderRadius: 50 + 'px'}} alt="Card image cap" />
  </Col>
 
</Row>
      
      <Row style={{marginTop:"5%"}}>
      <Col md={12} xs={12}><h3 style={{color:'blue'}}>About Team Members</h3></Col>

      <Col md={4} xs={12}>
   <Card className="Cardstyle">
       <CardBody>
          <Image src={image2}  roundedCircle style={{height:'180px',width:'300px',marginBottom:'5%'}} alt="Card image cap" />
           <center><CardTitle tag="h5" style={{color:'#172D02'}}>SHUBHANGI MHASKE</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Computer Engineer</CardSubtitle></center>
        { /* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>*/}
        </CardBody>
      </Card>
      </Col>
      <Col md={4} xs={12}>
     <Card className="Cardstyle">
       <CardBody>
          <Image src={image2}  roundedCircle style={{height:'180px',width:'300px',marginBottom:'5%'}} alt="Card image cap" />
           <center><CardTitle tag="h5" style={{color:'#172D02'}}>GAUTAMI PATOLE</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Computer Engineer</CardSubtitle></center>
        { /* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>*/}
        </CardBody>
      </Card>      </Col>
      <Col md={4} xs={12}>

 <Card className="Cardstyle">
       <CardBody>
          <Image src={image1}  roundedCircle style={{height:'180px',width:'300px',marginBottom:'5%'}} alt="Card image cap" />
           <center><CardTitle tag="h5" style={{color:'#172D02'}}>BHAIRAVI KHAIRNAR</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Computer Engineer</CardSubtitle></center>
        { /* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>*/}
        </CardBody>
      </Card></Col>
      </Row>
      </Container>
    </div>
  );
};

export default Example;
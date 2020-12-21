import React,{Component} from 'react';
import {Jumbotron,Container,Row,Col} from 'reactstrap'
import Image from 'react-bootstrap/Image'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/stages.jpg'

class Main extends Component{
    render(){
        return(
            <React.Fragment>
                

                <Container>

                <Row >
                  <Col xs={12} md={6}style={{ marginTop: "5%", marginBottom:"5%"}}>
                     <h5>What is Parkinson's Diesease?</h5>
                    Parkinson's disease is one of the most common movement disorders. It occurs when the brain doesn't produce 
                    enough dopamine, a chemical that supports smooth, controlled muscle movement. This condition typically affects 
                    older adults but can also occur in people in their 30s or 40s.
                    With Parkinson's, you may experience movement that:
                    Feels out of your control, such as trembling (tremors) when you are trying to be still
                    Becomes increasingly difficult, including slower, unsteady activity throughout your body.
                    <a href="#">More about Parkinson's Diesease</a>
                </Col>
                    <Col xs={12} md={6}style={{ marginTop: "5%", marginBottom:"5%"}}>
                          <Image src={image1} thumbnail />
                                    
                    </Col>
                    
                </Row>
                <Row >
                 <h5> 5 Stages of parkinson's Diesease</h5>
                  <Col xs={12} style={{ marginTop:"1%",marginBottom:"3%"}}> <h5 style={{color:"#5D6D7E "}}>Stage 1</h5>
                      During the earliest stage, the symptoms are often mild and tend to go unnoticed. Slight tremors or other 
                      movement symptoms may occur one one side of the body.
                 </Col>
                <Col xs={12}> <h5 style={{color:"#5D6D7E "}}>Stage 2</h5>
                     Tremors or other movement symptoms become stronger and affect both sides of the body. Changes in how a person 
                     walks or moves is recognizably different as daily tasks become more difficult.
                </Col>

                 <Col xs={12} style={{ marginTop:"1%", marginBottom:"3%"}}>
                          <center><Image src={image2} thumbnail/></center>
                                    
                    </Col>


                <Col xs={12} style={{  marginBottom:"3%"}}> <h5 style={{color:"#5D6D7E "}}> Stage 3 </h5>
                    As the disease continues to progress, balance becomes more challenging and movements become even more slowed. 
                    The person may still live independently but functions like eating or dressing themselves become more burdensome.  
                 </Col>
                <Col xs={12} style={{marginBottom:"3%"}}><h5 style={{color:"#5D6D7E "}}> Stage 4 </h5>
                   Often times, this becomes the transitional period where the person is no longer able to live alone. Walkers
                    or other aides are used daily to help support a person’s limited mobility.
                </Col>
                <Col xs={12} style={{marginBottom:"3%"}}> <h5 style={{color:"#5D6D7E "}}> Stage 5 </h5>
                   Patients are confined to a wheelchair or bed, and require a caregiver’s presence around the clock.
                </Col>
                </Row>
                   </Container>
                
            </React.Fragment>
        );
    }
}
export default Main;


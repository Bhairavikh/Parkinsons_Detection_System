import React,{Component} from 'react';
import {Jumbotron,Container,Row,Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class footer extends Component{
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid style={{marginTop:"2%"}}>
                <Container>
                <Row>
                    <Col><center><NavLink to="/about">About us</NavLink></center></Col>
                    <Col><center><NavLink to="/contact">Contact us</NavLink></center></Col>
                    <Col><center><NavLink to="/feedback">Feedback</NavLink></center></Col>
                </Row>

                <Row className="justify-content-center">
                    <p>2020 @  Team_Name. All Rights Reserved </p>
                </Row>

                
                </Container>
                </Jumbotron>
            </React.Fragment>

 
            
        );
    }
}
export default footer;
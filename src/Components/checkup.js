import React,{Component} from 'react';
import {Jumbotron,Container,Row,Form,Col,Input,FormGroup,Button} from 'reactstrap';

class Main extends Component{
    submitHandler = (event) =>{
      event.preventDefault();
      alert("You are submitting");
    }
    render(){
        return(
          <React.Fragment>
            <Container>
              <Row className="justify-content-center"><h5>Enter your medical details to check whether you have parkinsons or not</h5></Row>
              <Row className="justify-content-center">
                <Form onSubmit={this.submitHandler}>
                    <FormGroup row>
                        <Col><Input type="text" placeholder="MDVP:Fo(Hz)" id="MDVP_Fo"/></Col>
                        <Col><Input type="text" placeholder="MDVP:Fhi(Hz)" id="MDVP_Fhi"/></Col>
                        <Col><Input type="text" placeholder="MDVP:Flo(Hz)" id="MDVP_Flo"/></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col><Input type="text" placeholder="MDVP:Jitter(%)" id="MDVP_Jitter_Perc"/></Col>
                        <Col><Input type="text" placeholder="MDVP:Jitter(Abs)" id="MDVP_Jitter_Abs"/></Col>
                        <Col><Input type="text" placeholder="MDVP:RAP" id="MDVP_RAP"/></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col><Input type="text" placeholder="MDVP:PPQ" id="MDVP_PPQ"/></Col>
                        <Col><Input type="text" placeholder="Jitter:DDP" id="Jitter_DDP"/></Col>
                        <Col><Input type="text" placeholder="MDVP:Shimmer" id="MDVP_Shimmer"/></Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col><Input type="text" placeholder="MDVP:Shimmer(db)" id="MDVP_Simmer_db"/></Col>
                      <Col><Input type="text" placeholder="Shimmer:APQ3" id="Shimmer:APQ3"/></Col>
                      <Col><Input type="text" placeholder="Shimmer:APQ5" id="Shimmer_APQ5"/></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col><Input type="text" placeholder="MDVP:APQ" id="MDVP_APQ"/></Col>
                        <Col><Input type="text" placeholder="Shimmer:DDA" id="Shimmer_DDA"/></Col>
                        <Col><Input type="text" placeholder="NHR" id="NHR"/></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col><Input type="text" placeholder="HNR" id="HNR"/></Col>
                        <Col><Input type="text" placeholder="Status" id="Status"/></Col>
                        <Col><Input type="text" placeholder="RPDE" id="RPDE"/></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col><Input type="text" placeholder="DFA" id="DFA"/></Col>
                        <Col><Input type="text" placeholder="spread2" id="spread2"/></Col>
                        <Col><Input type="text" placeholder="D2" id="D2"/></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col><Input type="text" placeholder="PPE" id="PPE"/></Col>
                        <Col><Button type="submit">Submit</Button></Col>
                    </FormGroup>
                </Form>
              </Row>
            </Container>
          </React.Fragment>
        );
    }
}
export default Main;


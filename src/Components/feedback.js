import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Row,Col,Container} from 'reactstrap';



class Feedback extends Component{
    render(){
        return(

 <Container>
    
    <Form style={{margin:'5%'}}>
   
      <h3 style={{color:'blue'}}><span className="fa fa-angle-double-right"></span> FEEDBACK</h3>
      <FormGroup>
        <Label for="Username">Enter Your name</Label>
        <Input type="text" autoComplete="off" name="text"  placeholder="Enter Your Name Here..."/  >
      </FormGroup>

      <FormGroup>
        <Label for="feedback">Enter Feedback</Label>
        <Input type="textarea" autoComplete="off" name="feedback" placeholder="Your Feedback Here..." />
      </FormGroup>
     
    
      
       <center>  <Button color="info" style={{marginTop:'3%',width:'200px'}}>Submit Feedback</Button>{' '}  </center>
    </Form>

  </Container>
    
  );
}
}
export default Feedback;
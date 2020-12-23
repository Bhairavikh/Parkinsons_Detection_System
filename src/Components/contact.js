import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Row,Col,Container} from 'reactstrap';

class Example extends Component{
    render(){
        return(

    <div >
    <Container>
    <Form style={{margin:'5%'}}>
       <h3 style={{color:'blue'}}><span className="fa fa-angle-double-right"></span>CONTACT US</h3>
      
      <FormGroup>
        <Label for="Username">Enter Name</Label>
        <Input type="text" autoComplete="off" name="text"  placeholder="Name Here..."/>
      </FormGroup>

         <FormGroup>
        <Label for="EmalId">Enter Valid EmailId</Label>
        <Input type="text" autoComplete="off" name="email"  placeholder="Email id..."/>
      </FormGroup>

      <FormGroup>
        <Label for="Message">Enter Message</Label>
        <Input type="textarea" autoComplete="off" name="message" placeholder="Your Message Here..." />
      </FormGroup>
     
    
      
       <center>  <Button color="info" style={{marginTop:'3%',width:'200px'}}>Submit</Button>{' '}  </center>
    </Form>
    </Container>
</div>
  
    
  );
}
}
export default Example;
import React,{Component} from 'react';
import {Navbar,Nav,NavItem,NavbarBrand,Collapse,NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            collapsed : false
        }
    }
    render(){
        const toggleNavbar  = () =>{
            this.setState(
                {collapsed : ! this.state.collapsed}
                );}
        return(
            <React.Fragment>
              <Navbar color="dark" dark expand="md" >
                <div className="container">
                <NavbarBrand><span className="fa fa-user-md"></span> Parkinsons Detection</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={this.state.collapsed} navbar>
                    <Nav navbar >
                                <NavItem className="ml-sm-5">
                                    <NavLink href="#" to="/home" className="nav-link"><span className="fa fa-home"></span> Home</NavLink>
                                </NavItem>
                                <NavItem className="ml-sm-5">
                                    <NavLink href="#" to="/checkup" className="nav-link"><span className="fa fa-stethoscope"></span> CheckUp</NavLink>
                                </NavItem>
                                <NavItem className="ml-sm-5">
                                    <NavLink href="#" to="/precautions" className="nav-link"><span className="fa fa-heartbeat"></span> Preacautions</NavLink>
                                </NavItem>
                                <NavItem className="ml-sm-5">
                                    <NavLink href="#" to="/nearby" className="nav-link"><span className="fa fa-hospital-o"></span> Nearby Hospitals</NavLink>
                                </NavItem>
                         </Nav>
                         </Collapse>
                         </div>
                </Navbar>
            </React.Fragment>
        );
    }
};
export default Header;
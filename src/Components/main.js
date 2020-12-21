import React,{Component} from 'react';
import Home from './home';
import Checkup from './checkup';
import Nearby from './hospitals';
import Preacautions from './precautions';
import Header from './header'
import Footer from './footer';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import About from './about';
import Contact from './contact'
import Feedback from './feedback';

class Main extends Component{
    render(){
        return(
            <div>
            <Header/>
            <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={10}>
            <Switch location={this.props.location}>
                <Route path="/home" component={Home}/>
                <Route path="/precautions" component={Preacautions}/>
                <Route path="/checkup" component={Checkup}/>
                <Route path="/nearby" component={Nearby}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/feedback" component={Feedback}/>
                <Redirect to="/home"/>
            </Switch>
            </CSSTransition>
            </TransitionGroup>
            <Footer/>

       </div>
        );
    }
}
export default withRouter(Main);

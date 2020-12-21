{/* import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Main from "./Components/main";
import Feedback from "./Components/feedback"
import Precautions from './Components/precautions';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Feedback/>
      <Precautions/>
      <Footer/>
    </div>
  );
}

export default App; */}


import './App.css';
import React,{Component} from 'react';
import Main from "./Components/main";
import {BrowserRouter} from 'react-router-dom';
class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Main/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;


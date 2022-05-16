import React from "react";
// import './App.css';

import LogInPage from "./components/loginPage/loginPage";
import RegistrationPage from "./components/registrationPage/registrationPage";

import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      check :false
    };
    this.handleChange = this.handleChange.bind(this);
    console.log('constructor '+ this.state.check);
  }
  handleChange(event){
    console.log('handleChange '+ event.target.checked);
    if(event.target.checked==true){
    this.setState({
      check:true
    });
  }
    else {
    this.setState({
      check:false
    });
  }
  }
  render() {
    return (
<Router>
      <Routes>
        <Route path="/" exact element={<LogInPage check={this.state.check} handleChange={this.handleChange}/>}/>
        <Route path="/RegistrationPage" exact element={<RegistrationPage check={this.state.check} handleChange={this.handleChange}/>}/>
     </Routes>
</Router>

    );
  }
}

export default App;

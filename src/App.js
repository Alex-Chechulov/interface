import React from "react";
// import './App.css';

import LogInPage from "./components/loginPage/loginPage";
import RegistrationPage from "./components/registrationPage/registrationPage";
import MainPage from "./components/mainPage/mainPage";

import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dictionary from "./dictionary";

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    switch (sessionStorage.getItem('check')) {
      case null:
        sessionStorage.setItem('check', '');
        this.state = {activeLanguage:Dictionary("en")};
        break;
      case '':
      this.state = {activeLanguage:Dictionary("en")};
        break;
      case 'true':
      this.state = {activeLanguage:Dictionary("ru")};
        break;
      default:
        sessionStorage.setItem('check', '');
        this.state = {activeLanguage:Dictionary("en")};
    }
  }
  handleChange(event){
  if(event.target.checked==true){
    sessionStorage.setItem('check', 'true');
    this.setState({activeLanguage:Dictionary("ru")});
  } else {
    sessionStorage.setItem('check', '');
    this.setState({activeLanguage:Dictionary("en")});
  }
  }
  render() {
    return (
<Router>
      <Routes>
        <Route path="/" exact element=
            {<LogInPage
              activeLanguage={this.state.activeLanguage}
              handleChange={this.handleChange}/>}/>
        <Route path="/RegistrationPage" exact element=
            {<RegistrationPage
              activeLanguage={this.state.activeLanguage}
              handleChange={this.handleChange}/>}/>
              <Route path="/MainPage" exact element=
                  {<MainPage
                    activeLanguage={this.state.activeLanguage}
                    handleChange={this.handleChange}/>}/>
     </Routes>
</Router>

    );
  }
}

export default App;

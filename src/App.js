import React from "react";
// import './App.css';

import LogInPage from "./components/loginPage/loginPage";
import RegistrationPage from "./components/registrationPage/registrationPage";

import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom';

class App extends React.Component{
  render() {
    return (
<Router>
      <Routes>
        <Route path="/" exact element={<LogInPage/>}/>
        <Route path="/RegistrationPage" exact element={<RegistrationPage/>}/>
     </Routes>
</Router>

    );
  }
}

export default App;

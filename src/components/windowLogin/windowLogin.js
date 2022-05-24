import React from "react";
import './windowLogin.css';

import cogoToast from 'cogo-toast';
import axios from "axios";

class WindowLogin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {login: '', password: '', errorClass: 'login-error-input login-error-hidden'};

    this.passwordChange = this.passwordChange.bind(this);
    this.loginChange = this.loginChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  loginChange(event) {
    this.setState({login: event.target.value});
  }
  passwordChange(event) {
    this.setState({password: event.target.value});
  }
  // static async login(username, password) {
  //       const body = new FormData();
  //       body.append('username', username)
  //       body.append('password', password)
  //       const response = await API({
  //           method: 'post',
  //           url: 'user/login/',
  //           data: body,
  //           headers: {
  //               'Content-Type': multipart/form-data,
  //           },
  //       });
  //       return response
  //   }
  handleSubmit(event) {
    const body = new FormData();
    body.append('username', this.state.login);
    body.append('password', this.state.password);
    axios({
      method: 'POST',
      url: 'http://10.0.25.63:8000/api/user/login/',
      data: body,
      headers: {
          'Content-Type': `multipart/form-data; boundary=${body._boundary}`,
           },
    })
    .then((response) => {
      this.setState({errorClass: 'login-error-input login-error-hidden'});
      cogoToast.success("Success Login!");
      // this.props.history.go('/MainPage');
      //document.location.href = "/MainPage";
      setTimeout(() => {  document.location.href = "/MainPage"; }, 1000);
      console.log(response);
    })
    .catch((error) =>{
      this.setState({errorClass: 'login-error-input'});
      cogoToast.error("Login failed!");
      console.error(error);
    });



  //   if(localStorage.getItem(this.state.login)==this.state.password){
  //   this.setState({errorClass: 'login-error-input login-error-hidden'});
  //   alert('Login sucsess!');
  //   // localStorage.clear();
  // }  else {
  //   this.setState({errorClass: 'login-error-input'});
  // }
    event.preventDefault();
  }
  render() {
    return (
<div className="login-window">
<p className="login-window-caption">{this.props.activeLanguage.authorization}</p>
<form className="login-form-input" onSubmit={this.handleSubmit}>
    <input
        type="login"
        value={this.state.login}
        name="login"
        placeholder={this.props.activeLanguage.login}
        className="input-login"
        onChange={this.loginChange}/>
    <input
        type="password"
        value={this.state.password}
        name="password"
        placeholder={this.props.activeLanguage.password}
        className="input-password"
        onChange={this.passwordChange}/>
    <label>
    <p className={this.state.errorClass}>{this.props.activeLanguage.errorLogin}</p>
    <a className="create-account-link" href="RegistrationPage">{this.props.activeLanguage.createAccount}</a>
    </label>
    <button type="submit" className="login-button">{this.props.activeLanguage.logIn}</button>
</form>
</div>
    );
  }
}

export default WindowLogin;

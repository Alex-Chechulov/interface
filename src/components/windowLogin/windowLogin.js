import React from "react";
import './windowLogin.css';
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
  handleSubmit(event) {
    // alert('login: ' + this.state.login);
    // alert('password: ' + this.state.password);

  if (this.state.login=="admin"&&this.state.password=="admin"){
    this.setState({errorClass: 'login-error-input login-error-hidden'});
    alert('Login sucsess!');
  }  else {
    this.setState({errorClass: 'login-error-input'});
  }
    event.preventDefault();
  }
  render() {
    return (
<div className="login-window">
<p className="login-window-caption">Authorization</p>
<form className="login-form-input" onSubmit={this.handleSubmit}>
    <input
        type="login"
        value={this.state.login}
        name="login"
        placeholder="Login"
        className="input-login"
        onChange={this.loginChange}/>
    <input
        type="password"
        value={this.state.password}
        name="password"
        placeholder="Password"
        className="input-password"
        onChange={this.passwordChange}/>
    <label>
    <p className={this.state.errorClass}>Incorrect username or password</p>
    <a className="create-account-link" href="RegistrationPage">Create account</a>
    </label>
    <button type="submit" className="login-button">Log in</button>
</form>
</div>
    );
  }
}

export default WindowLogin;

import React from "react";
import './windowRegistration.css';
class WindowRegistration extends React.Component{
  constructor(props) {
    super(props);
    this.state = {login: '', password: '', errorClass: 'registration-error-input registration-error-hidden'};

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
  if (this.state.login=="admin"&&this.state.password=="admin"){
    this.setState({errorClass: 'registration-error-input registration-error-hidden'});
    alert('Login sucsess!');
  }  else {
    this.setState({errorClass: 'registration-error-input'});
  }
    event.preventDefault();
  }
  render() {
    return (
<div className="registration-window">
<p className="registration-window-caption">Create account</p>
<form className="registration-form-input" onSubmit={this.handleSubmit}>
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
    <input
        type="password"
        value={this.state.password}
        name="сonfirm password"
        placeholder="Confirm password"
        className="input-password"
        onChange={this.passwordChange}/>
    <label>
    <p className={this.state.errorClass}>Incorrect username or password</p>
    <a className="authorization-link" href="javascript:history.go(-1)">Authorization</a>
    </label>
    <button type="submit" className="registration-button">Log in</button>
</form>
</div>
    );
  }
}

export default WindowRegistration;

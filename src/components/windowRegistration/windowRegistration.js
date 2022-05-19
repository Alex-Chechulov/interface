import React from "react";
import './windowRegistration.css';
class WindowRegistration extends React.Component{
  constructor(props) {
    super(props);
    this.state = {login: '', password: '', confirmPassword: '', errorClass: 'registration-error-input registration-error-hidden'};

    this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.loginChange = this.loginChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.userData=[{login:'admin', password:'admin'}];
  }
  loginChange(event) {
    this.setState({login: event.target.value});
  }
  passwordChange(event) {
    this.setState({password: event.target.value});
  }
  confirmPasswordChange(event) {
    this.setState({confirmPassword: event.target.value});
  }
  handleSubmit(event) {
  if (this.state.confirmPassword==this.state.password){
    this.setState({errorClass: 'registration-error-input registration-error-hidden'});
    alert('Registration sucsess!');

    localStorage.setItem(this.state.login, this.state.password);
  }  else {
    this.setState({errorClass: 'registration-error-input'});
  }
    event.preventDefault();
  }
  render() {
    return (
<div className="registration-window">
<p className="registration-window-caption">{this.props.activeLanguage.createAccount}</p>
<form className="registration-form-input" onSubmit={this.handleSubmit}>
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
    <input
        type="password"
        value={this.state.confirmPasswordChange}
        name="сonfirm password"
        placeholder={this.props.activeLanguage.confimPassword}
        className="input-password"
        onChange={this.confirmPasswordChange}/>
    <label>
    <p className={this.state.errorClass}>{this.props.activeLanguage.errorRegistrstion}</p>
    <a className="authorization-link" href="javascript:history.go(-1)">{this.props.activeLanguage.authorization}</a>
    </label>
    <button type="submit" className="registration-button">{this.props.activeLanguage.registration}</button>
</form>
</div>
    );
  }
}

export default WindowRegistration;

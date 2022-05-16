import React from "react";
import Header from "../header/header";
import WindowLogin from "../windowLogin/windowLogin";
import AdditInfo from "../additInfo/additInfo";
import "./loginPage.css";

class LogInPage extends React.Component{
  render() {
    return (
<div className="login-main">
<Header />
<AdditInfo check={this.props.check}
handleChange={this.props.handleChange}/>
<WindowLogin check={this.props.check}/>
</div>
    );
  }
}

export default LogInPage;

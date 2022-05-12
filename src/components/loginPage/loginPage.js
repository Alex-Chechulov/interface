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
<WindowLogin />
<AdditInfo />
</div>
    );
  }
}

export default LogInPage;

import React from "react";
import Header from "../header/header";
import WindowRegistration from "../windowRegistration/windowRegistration";
import AdditInfo from "../additInfo/additInfo";
import "./registrationPage.css";

class RegistrationPage extends React.Component{
  render() {
    return (
<div className="registration-main">
<Header />
<AdditInfo activeLanguage={this.props.activeLanguage}
handleChange={this.props.handleChange}/>
<WindowRegistration activeLanguage={this.props.activeLanguage}/>
</div>
    );
  }
}

export default RegistrationPage;

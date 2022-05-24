import React from "react";
import Header from "../header/header";
import MapMain from "../mapMain/mapMain";
import AdditInfo from "../additInfo/additInfo";
import "./mainPage.css";

class MainPage extends React.Component{
  render() {
    return (
<div className="main-main">
<Header />
<AdditInfo activeLanguage={this.props.activeLanguage}
handleChange={this.props.handleChange}/>
<MapMain/>
</div>
    );
  }
}

export default MainPage;

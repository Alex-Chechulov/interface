import React from "react";
import "./mapMain.css";
class MapMain extends React.Component{
  render() {
    return (
<div className="map-main">
  <div className="map-img">
    <div className="point" id="one" data-title="One: ipsum dolor sit amet, consectetur adipisicing elit."/>
    <div className="point" id="two" data-title="Two: ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    <div className="point" id="three" data-title="Three: ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    <div className="point" id="four" data-title="Four: ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."/>
  </div>
</div>
    );
  }
}

export default MapMain;

import React from 'react';
import "./additInfo.css";

class AdditInfo extends React.Component{
  constructor(props) {
  super(props);
  this.state = {date: new Date()};
}
componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}
componentWillUnmount() {
  clearInterval(this.timerID);
}
tick() {
  this.setState({
    date: new Date()
  });
}
timeInUTC(){
  let UTChour = this.state.date.getUTCHours();
  let UTCminute = this.state.date.getUTCMinutes();
  let UTCsecond = this.state.date.getUTCSeconds();
  if (UTChour<10) UTChour = "0" + UTChour;
  if (UTCminute<10) UTCminute = "0" + UTCminute;
  if (UTCsecond<10) UTCsecond = "0" + UTCsecond;
  return UTChour + ":" + UTCminute+ ":" + UTCsecond;
}

  render() {
    return (
<div className="main-addit">
<div className="clockBody">
<div className="app clockBody">
  <h1 className="heading">Time in format UTC:</h1>
  <div className="outer-wrapper">
    <div className="inner-wrapper">
      <h2 className="clock">
      {this.timeInUTC()}
      </h2>
    </div>
  </div>
  <div className="outer-wrapper">
    <div className="inner-wrapper">
      <h2 className="clock">
      EN
      <label class="switch">
        <input type="checkbox" onChange={this.props.handleChange} checked={this.props.check}/>
        <span class="slider round"/>
      </label>
      RU
      </h2>
    </div>
  </div>
</div>
</div>
</div>
    );
  }
}

export default AdditInfo;

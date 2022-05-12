import React from "react";
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
  if (UTChour<10) UTChour = "0" + UTChour;
  if (UTCminute<10) UTCminute = "0" + UTCminute;
  return UTChour + ":" + UTCminute;
}
  render() {
    return (
<div className="main-addit">
<p>Time in format UTC:</p>
<p>{this.timeInUTC()}</p>
EN
<label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
RU
</div>
    );
  }
}

export default AdditInfo;

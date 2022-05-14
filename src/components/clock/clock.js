import React, { useEffect, useState } from "react";
import "./clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    let hr = time.getUTCHours();
    let min = time.getUTCMinutes();
    let sec = time.getUTCSeconds();

    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    hourHand.style.transform = `rotateZ(${180 + hr * 30}deg)`;
    // console.log(`rotateZ(${hr*30}deg)`);
    minuteHand.style.transform = `rotateZ(${180 + min * 6}deg)`;
    // console.log(`rotateZ(${min * 6}deg)`);
    secondHand.style.transform = `rotateZ(${sec * 6}deg)`;

    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return (
    <div>
      <div className="clock">
        <div className="face">
          <div id="secondHand" className="hand second"></div>
          <div id="minuteHand" className="hand minute"></div>
          <div id="hourHand" className="hand hour"></div>
          <div className="hand center"></div>
          <div className="number number1">1</div>
          <div className="number number2">2</div>
          <div className="number number3">3</div>
          <div className="number number4">4</div>
          <div className="number number5">5</div>
          <div className="number number6">6</div>
          <div className="number number7">7</div>
          <div className="number number8">8</div>
          <div className="number number9">9</div>
          <div className="number number10">10</div>
          <div className="number number11">11</div>
          <div className="number number12">12</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;

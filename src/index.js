import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function dayOfWeekAsString() {
    return ["MO","TU","WE","TH","FR","SA","SU"][new Date().getDay()-1];
  }

function tick() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;


    const element = (
      <div className="time">    
      <h2>Date</h2>{dayOfWeekAsString()}<h6>:</h6>
      <h3>hours</h3>{hours}<h6>:</h6>
      <h4>Minutes</h4>{minutes}<h6>:</h6>
      <h5>Seconds</h5>{seconds}
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);

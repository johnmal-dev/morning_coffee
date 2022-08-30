import React from "react";
import Clock from "react-live-clock";
import "./ClockComponent.css";

function ClockComponent() {
  return (
    <div className="clockComponent">
      <Clock format={"h:mm"} ticking={true} />
    </div>
  );
}

export default ClockComponent;

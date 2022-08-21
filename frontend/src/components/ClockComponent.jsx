import React from "react";
import Clock from "react-live-clock";

function ClockComponent() {
  return (
    <div>
      <Clock format={"h:mm"} ticking={true} />
    </div>
  );
}

export default ClockComponent;

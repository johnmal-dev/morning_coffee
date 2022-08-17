import React from "react";

const timeOfDay = () => {
  const hours = new Date().getHours();
  switch (true) {
    case hours >= 4 && hours < 12:
      return "morning";
    case hours < 18:
      return "afternoon";
    default:
      return "evening";
  }
};

const Greeting = () => {
  return <div>{`Good ${timeOfDay()}, John.`}</div>;
};

export default Greeting;

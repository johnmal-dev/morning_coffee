import React, { useEffect, useState } from "react";
import "./GreetingComponent.css";

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
  const [formName, setFormName] = useState(null);
  const [name, setName] = useState(null);
  const localName = localStorage.getItem("name");

  useEffect(() => {
    if (localName) {
      setName(localName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    localStorage.setItem("name", formName);
    setName(formName);
  };

  if (!localName) {
    return (
      <div className="greeting-component unselectable">
        <h1>Hello, what's your name?</h1>
        <form
          action="#"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name-input"
            id="name-input"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </form>
      </div>
    );
  }

  return (
    <div className="greeting-component unselectable">
      <h1>{`Good ${timeOfDay()}, ${name}.`}</h1>
    </div>
  );
};

export default Greeting;

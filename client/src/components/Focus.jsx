import React, { useState, useEffect } from "react";

const Focus = () => {
  const [formFocus, setFormFocus] = useState("");
  const [focus, setFocus] = useState(null);
  const localFocus = localStorage.getItem("focus");

  useEffect(() => {
    if (localFocus) {
      setFocus(localFocus);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    localStorage.setItem("focus", formFocus);
    setFocus(formFocus);
  };

  return (
    <div className="focus-component">
      {!focus && (
        <>
          <h3>What is your main focus for today?</h3>
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="text"
              name="focus-input"
              id="focus-input"
              value={formFocus}
              onChange={(e) => setFormFocus(e.target.value)}
            />
          </form>
        </>
      )}
      {focus && <>[] {focus}</>}
    </div>
  );
};

export default Focus;

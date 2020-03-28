import React from "react";

const Toggle = ({ darkMode, setDarkMode }) => (
  <div className="dark-mode-toggle">
    <button onClick={() => setDarkMode(!darkMode)}>
      <span>🌓</span>
    </button>
  </div>
);

export default Toggle;

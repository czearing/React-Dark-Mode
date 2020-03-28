import React from "react";
import ReactDOM from "react-dom";
import Toggle from "./dark-mode-toggle";
import useDarkMode from "./use-dark-mode";
import "./styles.css";
import cx from "classnames";
function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <div className={cx("App", darkMode ? "darkMode" : "lightMode")}>
      <div className="header">Dark Mode Test</div>
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="pageContent">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

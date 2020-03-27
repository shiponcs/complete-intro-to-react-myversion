import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";
const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";
const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">
            <h1>Adopt Me</h1>
          </Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));

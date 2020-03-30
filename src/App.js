import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";
import * as Sentry from "@sentry/browser";
Sentry.init({
  dsn: "https://77c663e095f44f399c705870aff9456d@sentry.io/5179945",
});
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

render(<App />, document.getElementById("root"));

import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt Me</h1>
            </Link>
          </header>
          <Suspense fallback={<h1>Loading! How are you btw?</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));

/* Here we used lazy, Suspense for code spliting.
many time, we don't need to load all the source files at the beginning of the first loading the site,
that time we use codes splitting, 
in this file Details component is loading when we go to /details.
by using lazy, and Suspense, we make it to load only when it's loaded.
Test it out on network section of dev tools.
you can also split the SearchParams

*You shouldn't apply code splitting here unless the file is more than 30kb, in developement environment*
we could make our files heavy by importing third party large packages.

Again, you have to apply code splitting carefully, if you don't find heavy point
to split your program, you are not supposed to apply code splitting, 
because that makes your user wait on that particular portion unnecessarily
that you could have loaded at beginning as that's lower in size.
Keep in mind that, you can split javascript file, not it's necessary for that
to be a Route, but again only when you see it's large. 
Like the Context provider, you can hava Suspense in multiple places 
or have one at top level and use it in the all components inside it 
*/

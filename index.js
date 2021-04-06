import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";

import "./style";

/*
"Broken Routing" Solution

OBJECTIVES:
1) Bug: Multiple "pages" are showing up at the same time when we only expect one at a time. Fix this.

Hints
- <Switch> tag is missing
- Wrap the <Route> tags in a <Switch> tag.

2) Bug: Clicking through the link pages does not properly switch between the page components. Fix this.

Hints
- Try to determine what component is being rendered.
- Try changing the order of routes
- OR,  the "exact" attribute may be helpful here.

3) Swap the order so the navigation bar is below the page content.

4) Modify the app so '/contact' shows "Contact Page" and "/contact/us" shows "Contact Page for US".

Hints
- Add a <Link> tag for "/contact/us"
- You can try adding another route for "/contact/:country"
- Route order matters
- Instead of adding another route, you could specify an optional url paramter with a ? suffix for instance: ":name?"

*/

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/:color" component={About} />
        <Route path="/contact/:country?" component={Contact} />
        // or, in this order :
        //<Route path="/contact" component={Contact} />
        //<Route path="/contact/:country" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>

      <Nav />
    </Router>
  );
}

function Nav() {
  return (
    <>
      <Link to="/?name=jamis">Home</Link> | <Link to="/about/red">About</Link> |{" "}
      <Link to="/contact">Contact</Link> | <Link to="/contact/us">Contact for US</Link> | <Link to="/arstarst">arstart</Link>
    </>
  );
}

function Home() {
  var params = new URLSearchParams(useLocation().search);
  var name = params.get("name");
  return <p>Hello {name}!</p>;
}

function About() {
  var params = useParams();
  console.log("params", params);
  return <p>About Page color is {params.color}</p>;
}

function Contact() {
  var params = useParams();
  return <p>Contact Page for {params.country}</p>;
}

function NotFound() {
  return <p>Oh no! Page not found!</p>;
}

render(<App />, document.getElementById("root"));



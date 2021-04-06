import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import './scss/style.scss';

import { Header } from "./components/app-header/Header";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";


function App() {

    return (
      <div className="wrapper">
        <Header />
        <div className="main">
          <div className="center">
          </div>
        </div>
        
        <div className="toolbar">
        </div>
      </div>
    );  
}
render(<App />, document.getElementById("root"));

/*
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
*/



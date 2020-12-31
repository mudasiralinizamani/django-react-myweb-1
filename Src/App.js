import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing Page Components - Mudasir Ali
import Home from "./Components/Pages/Home/Home";
import Courses from "./Components/Pages/Courses/Courses";
import Videos from "./Components/Pages/Videos/Videos";
import Blogs from "./Components/Pages/Blogs/Blogs";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses/" component={Courses} />
          <Route path="/videos/" component={Videos} />
          <Route path="/blogs/" component={Blogs} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");

render(<App />, appDiv);

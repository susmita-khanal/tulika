import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Exhibition from "./Components/Exhibition";
import Gallery from "./Components/Gallery";
import Store from "./Components/Store";
import Studios from "./Components/Studios";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" Components={Exhibition} />
          <Route exact path="/galley" Components={Gallery} />
          <Route exact path="/store" Components={Store} />
          <Route exact path="/studios" Components={Studios} />
          <Route exact path="/feed" Components={Feed} />
          <Route exact path="/login" Components={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

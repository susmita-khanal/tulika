import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Exhibition from "./Components/Exhibitions/Exhibition";
import Gallery from "./Components/Gallery/GalleryMain";
import Store from "./Components/Store/Index";
import Studios from "./Components/Studios/Index";
import Feed from "./Components/Feed";
import Login from "./Components/Login/Index";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Exhibition} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/studios" component={Studios} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

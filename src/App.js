import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Exhibition from "./Components/Exhibitions/Index";
import Gallery from "./Components/Gallery/GalleryMain";
import Store from "./Components/Store/Index";
import Studios from "./Components/Studios/Index";
import Feed from "./Components/Feed/Index";
import Login from "./Components/Login/Index";
import Footer from "./Footer";
// import ThemeToggleBtn from "./Components/ThemeToggleBtn";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Router>
        {/* <ThemeToggleBtn /> */}
        <Navbar />
        {/* <button onClick={() => setDarkMode(!darkMode)}>Dark Mode On</button> */}
        {/* <Home /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/exhibition" component={Exhibition} />
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

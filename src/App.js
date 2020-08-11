import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Login from "./components/Login/index";
import Room from "./components/Room/index";

// import soketIoClient from "socket.io-client";

const ENDPOINT = "http://localhost:5000";
// const ENDPOINT = "http://zikdemo.ir";

function App() {
  // const [show, setShow] = useState("");

  useEffect(() => {
    // const socket = soketIoClient(ENDPOINT, { path: "/app" });
    // socket.on("connect", () => {
    //   console.log("A user connect");
    // });
    // socket.on("message", (message) => {
    //   setShow(message);
    //   console.log(message);
    // });
    // return () => socket.disconnect();
  }, []);
  return (
    <Router>
      {/* <div className="App">
        <h1>Hello i m here</h1>
        <h2>{show}</h2>
      </div> */}
      <Switch>
        <Route path="/room" component={Room}></Route>
        <Route path="/" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;

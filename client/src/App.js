import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Chat from "./pages/Chat";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/browse">
              <Browse />
            </Route>
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

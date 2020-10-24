import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div class="ui container">
          <Route exact path="/" component={Home} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/chat" component={Chat} />
        </div>
      </Router>
    </div>
  );
}

export default App;

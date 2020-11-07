import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Gallery from "./pages/Gallery";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddChild from "./pages/AddChild";
import EditChild from "./pages/EditChild";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="App">
      <Router>

          <Route exact path="/home" component={Home} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Login} />
          <Route exact path="/addchild" component={AddChild} />
          <Route exact path="/editchild" component={EditChild} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

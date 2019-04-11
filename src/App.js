import React, { Component } from "react";
import Login from "./views/Pages/Login";
import Register from "./views/Pages/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;

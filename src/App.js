import React, { Component } from "react";
import Login from "./views/Pages/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Main from "./components/pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/pages/News";

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/news" component={News} />
          </Switch>
        </Router>
      </>
  );
}

export default App;

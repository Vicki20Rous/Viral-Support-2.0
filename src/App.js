import React from "react";

import './App.css';
import Main from "./components/Pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/Pages/News";

function App() {
  return (
      <>
        <Router>
          
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/news" component={News} />
          </Switch>
        </Router>
      </>
  );
}

export default App;

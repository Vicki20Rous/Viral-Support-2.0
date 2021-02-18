import React from "react";
import './App.css';
import Main from "./components/Pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/Pages/News";
import Footer from "./components/Footer"


function App() {
  return (
      <div className="page-container">
        <div className="content-wrap">

        
        <Router>
          
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/news" component={News} />
          </Switch>
        </Router>
        </div>
        <Footer />
      </div>
  );
}

export default App;

import React, { Component } from "react";
<<<<<<< HEAD
=======
import { Route, Switch } from "react-router-dom";
>>>>>>> develop
import Navbar from "./components/Navbar";
import Main from "./Pages/Main";
import Footer from "./components/Footer";
import Stats from "./Pages/Stats";
<<<<<<< HEAD
import News from "./Pages/Covid19News";
import Resources from "./Pages/Resources";
=======
import News from "./Pages/News";
>>>>>>> develop
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";


class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Main />
            <Stats />
            <News />
            <About />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/SignUp">
            <SignUp />
          </Route>
          
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;


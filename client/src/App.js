import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./Pages/Main/Main";
import Footer from "./components/Footer";
import Stats from "./Pages/Stats/Stats";
import About from "./Pages/About/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
// import Chat from "./components/Chat/Chat";
import News from "./Pages/News/NewsApp"
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

          {/* <Route path="/Join">
            <Chat />
          </Route> */}

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

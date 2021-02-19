import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./Pages/Main";
import Footer from "./components/Footer";
import Stats from "./Pages/Stats";
import News from "./Pages/News";
import About from "./Pages/About";

class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Main />
        <Stats />
        <News />
        <About />
        <Footer />
      </div>
    );
  }
}
export default App;
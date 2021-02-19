import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./Pages/Main";
import Footer from "./components/Footer";
import Stats from "./Pages/Stats";
import News from "./components/Covid19News";
import Resources from "./Pages/Resources";
import About from "./Pages/About";
import Article from "./Pages/Article";

class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Main />
        <Stats />
        <Article />
        <Resources />
        <About />
        <Footer />
      </div>
    );
  }
}
export default App;


import React, { Component } from "react";
import logo from "./logo.png";
import "./Main.css";
class Main extends Component {
  state = {};
  render() {
    return (
      <div id="/">
        <main
          id="main"
          className="relative sm:p-5 md:p-8 lg:p-10 container mx-auto"
        >
          <img
            src={logo}
            alt="logo"
            className="flex relative object-cover w-full h-full"
          />
        </main>
      </div>
    );
  }
}
export default Main;

import React, { Component } from "react";
import logo from "../../images/logo.png";
import "./Main.css";
class Main extends Component {
  state = {};
  render() {
    return (
      <div id="/">
        <main
          id="main"
          // className="relative flex flex-col justify-center container bg-cover bg-contain mx-auto sm:p-10 md:p-20 lg:p-32"
        >
          <img
            src={logo}
            alt="logo"
            // className="flex flex-col relative justify-center container bg-cover bg-contain mx-auto"
          />
        </main>
      </div>
    );
  }
}
export default Main;

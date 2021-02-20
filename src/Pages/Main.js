import React, { Component } from "react";
import background from "./background.png";
import "./Main.css"
class Main extends Component {
  state = {};
  render() {
    return (
      <main id="/" className="relative sm:p-10 md:p-20 lg:p-32 container mx-auto">
        <img
          src={background}
          alt="Background"
          className="flex relative object-cover w-full h-full"
        />
      </main>
    );
  }
}
export default Main;

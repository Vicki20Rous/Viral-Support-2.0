import React, { Component } from "react";
import background from "./background.png";
import "./Background.css"
class Main extends Component {
  state = {};
  render() {
    return (
      <main id="/" className="relative sm:p-5 md:p-8 lg:p-10 container mx-auto">
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

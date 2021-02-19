import React, { Component } from "react";
import background from "./background.jpg";

class Main extends Component {
  state = {};
  render() {
    return (
      <main>
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

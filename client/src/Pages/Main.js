import React, { Component } from "react";

class Main extends Component {
  state = {};
  render() {
    return (
      <div
        id="Main"
        className="bg-white h-screen flex flex-col justify-center items-center"
      >
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
          Viral Support
        </h1>
        <h2 className="lg:text-5xl md:text-3xl sm:text-2xl text-3xl font-black mb-14">
          Spread Support, Not COVID!
        </h2>
      </div>
    );
  }
}
export default Main;

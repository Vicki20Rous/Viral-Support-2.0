import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div
        id="About"
        className="bg-white h-screen flex flex-col justify-center items-center"
      >
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
          About
        </h1>
      </div>
    );
  }
}

export default About;

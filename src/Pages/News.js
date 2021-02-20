import React, { Component } from "react";

class News extends Component {
  state = {};
  render() {
    return (
      <div
        id="/News"
        className="bg-white h-screen flex flex-col justify-center items-center"
      >
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
          News
        </h1>
      </div>
    );
  }
}
export default News;

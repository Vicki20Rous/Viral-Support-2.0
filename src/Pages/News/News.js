import React, { Component } from "react";
import "./News.css";

class News extends Component {
  state = {};
  render() {

    return (
      <div id="/News">
        <main id="news" className="relative">
          <div className="sm:p-10 md:p-20 lg:p-32 container mx-auto relative">
            <div className="rounded-lg border-solid border-8 border-red-900 border-opacity-50">
            <section className="bg-gradient-to-b from-purple-700 via-pink-800 to-red-900 shadow-2xl lg:flex sm:p-4 md:p-8 lg:p-10">
              <div className="flex flex-col justify-center">
                <h1 className="relative text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-center text-white mb-3">
                  News
                </h1>
                </div>
            </section>
            </div>
          </div>
        </main>
      </div>
    );
  }
  }

export default News;

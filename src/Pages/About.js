import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./About.css";
class About extends Component {
  state = {};
  render() {
    return (
      <main id="/About" className="relative">
        <div className="sm:p-10 md:p-20 lg:p-32 container mx-auto relative">
          <section className="bg-red-600 rounded-lg shadow-2xl lg:flex sm:p-4 md:p-8 lg:p-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-center text-white mb-3">
                About <span className="text-red-900">Viral </span>Support{" "}
                <i id="heart" className="fas fa-heartbeat text-red-900"></i>
              </h1>
              <div className="text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl font-serif text-center text-white">
                Viral Support was made to help people struggling with COVID-19.
                Because of this pandemic, many people must deal with loss, fear,
                and loneliness. It's easy to get lost in the overwhelming amount
                of misinformation regarding COVID-19. Viral Support provides a
                way to stay connected with others and offers references to
                real-time, fact-checked information to help keep you safe. We
                want our users to feel safe and well informed as well as finding
                some comfort in connecting with people with shared experiences.
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default About;

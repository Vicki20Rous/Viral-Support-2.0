import React, { Component } from "react";
import { Link } from "react-scroll";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <Link
          activeClass="active"
          to="Main"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="Stats"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          Stats
        </Link>

        <Link
          activeClass="active"
          to="News"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          News
        </Link>

        <Link
          activeClass="active"
          to="Resources"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          Resources
        </Link>

        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          About
        </Link>

        <div className="px-4 cursor-pointer md:hidden">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
    );
  }
}

export default Navbar;

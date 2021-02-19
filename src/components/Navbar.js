import React, { Component } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header className="bg-gray-100">
        <div className="container h-12 px-2 mx-auto flex flex-wrap justify-between">
          <nav className="flex" role="navigation">
            <Link
              activeClassName="text-white"
              className="items-center py-2 px-2 mr-2 text-red-800 hover:text-blue-800 text-2xl font-serif active"
              to="Main"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={Link.handleSetActive}
            >
              Home
            </Link>

            <Link
              activeClassName="text-white"
              className="items-center py-2 px-2 mr-2 text-red-800 hover:text-blue-800 text-2xl font-serif active"
              to="Stats"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={Link.handleSetActive}
            >
              Stats
            </Link>

            <Link
              activeClassName="text-white"
              className="items-center py-2 px-2 mr-2 text-red-800 hover:text-blue-800 text-2xl font-serif active"
              to="News"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={Link.handleSetActive}
            >
              News
            </Link>

            <Link
              activeClassName="text-white"
              className="items-center py-2 px-2 mr-2 text-red-800 hover:text-blue-800 text-2xl font-serif active"
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={Link.handleSetActive}
            >
              About
            </Link>

            <Dropdown
              options={["Link", "Link", "Link", "Link", "Link"]}
              onOptionSelect={(option) => {
                console.log("Selected Option", option);
              }}
            />
          </nav>

          <div className="flex" role="navigation">
            <NavLink
              to="/Login"
              activeClassName="text-white"
              className="items-center py-2 px-2 mr-2 text-red-800 hover:text-blue-800 text-2xl font-serif active"
            >
              Login
            </NavLink>

            <NavLink
              to="/SignUp"
              activeClassName="text-white"
              className="items-center py-2 px-2 mr-2 text-red-800 hover:text-blue-800 text-2xl font-serif active"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;

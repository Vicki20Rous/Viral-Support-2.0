import React, { Component } from "react";
import "./Main.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <main id="main" className="relative sm:p-5 md:p-8 lg:p-10 container mx-auto">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-red-800">
            Account Login
          </h2>
          <form className="space-y-3">
            <div>
              <label className="block mb-5 font-bold" for="name">
                Username
              </label>
              <input
                className="w-full block border-2 border-red-800 p-3 rounded outline-none focus:border-red-500"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label className="block mb-5 font-bold" for="name">
                Password
              </label>
              <input
                className="w-full block border-2 border-red-800 p-3 rounded outline-none focus:border-red-500"
                type="password"
                id="password"
              />
            </div>
            <button className="block w-full bg-red-600 hover:bg-red-400 p-4 rounded font-bold text-white hover:text-red-800 transition duration-300">Login!</button>
          </form>
        </div>
      </div>
      </main>
    );
  }
}

export default Login;

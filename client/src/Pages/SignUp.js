import React, { Component } from "react";
import "./Main/Main.css";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <main id="main" className="relative sm:p-5 md:p-10 lg:p-16 container mx-auto">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-red-800">
            Create Your Account
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
                Email
              </label>
              <input
                className="w-full block border-2 border-red-800 p-3 rounded outline-none focus:border-red-500"
                type="email"
                id="email"
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
            <div className="flex items-center">
              <input type="checkbox" id="agree" />
              <label  className="ml-2 text-gray-700 text-sm" for="agree">I agree to the terms and privacy.</label>
            </div>
            <button className="block w-full bg-red-600 hover:bg-red-400 p-4 rounded font-bold text-white hover:text-red-800 transition duration-300">Sign Up!</button>
          </form>
        </div>
      </div>
      </main>
    );
  }
}
export default SignUp;

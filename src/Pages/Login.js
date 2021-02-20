import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <NavLink to="/Login">
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <div class="loginContainer">
          <h2>Please login to proceed</h2>
          <form class="login">
            <div class="field">
              <label for="" class="label">
                Email
              </label>
              <p class="control has-icons-left has-icons-right">
                <input
                  id="email-input"
                  class="input"
                  type="email"
                  placeholder="e.g. name@gmail.com"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right"></span>
              </p>
            </div>
            <div class="field">
              <label for="" class="label">
                Password
              </label>
              <p class="control has-icons-left">
                <input
                  id="password-input"
                  class="input"
                  type="password"
                  placeholder="*******"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success">Login</button>
              </p>
            </div>
          </form>
        </div>
      </div>
      </NavLink>
    );
  }
}

export default Login;

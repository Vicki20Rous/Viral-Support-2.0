import React, { Component } from "react";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <div class="loginContainer">
          <h2>Sign Up Form</h2>
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
                Username
              </label>
              <p class="control has-icons-left has-icons-right">
                <input
                  id="username-input"
                  class="input"
                  type="username"
                  placeholder="Username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-users"></i>
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
                <button class="button is-success">Sign Up</button>
              </p>
            </div>
          </form>
          Or sign in <a href="http://localhost:8080/login">here</a>
        </div>
      </div>
    );
  }
}
export default SignUp;

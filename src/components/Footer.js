import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container-footer">
      <div className="row">
            <p className="col-sm">
              <h4>Support Staff:</h4>
            </p>
        </div>
        <div className="row">

          <div className="col">
            <h5>Victoria</h5>
            <ul className="list">
              <li>GitHub</li>
              <li>Linkedin</li>
            </ul>
          </div>
          
          <div className="col">
            <h5>Gavin</h5>
            <ul className="list">
              <li>GitHub</li>
              <li>Linkedin</li>
            </ul>
          </div>
          
          <div className="col">
            <h5>Beth</h5>
            <ul className="list">
              <li>GitHub</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
            <p className="col-sm">
              &copy; 2021  |  Viral Support 2.0  
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

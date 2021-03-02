import React, { useState } from "react";
import classNames from "classnames";
import "./Dropdown.css";

function Dropdown() {
  // Keep track of whether the dropdown is open or not.
  const [isActive, setActive] = useState(false);
  return (
    <div>
      {" "}
      <button
        onClick={() => setActive(!isActive)}
        className="items-center hover:bg-red-600 hover:text-white py-2 px-2 mr-2 text-red-800 sm:text-xs md:text-sm lg:text-base xl:text-lg font-serif active"
      >
        Resources
      </button>
      <div
        id="menu"
        style={{ position: "absolute" }}
        className={classNames(
          "origin-bottom-center bg-white mt-2 w-56 py-2 px-2 rounded-md shadow-lg",
          {
            block: isActive,
            hidden: !isActive,
          }
        )}
      >
        <ul className="font-serif divide-y divide-light-red-400">
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
              CDC
            </a>
          </li>
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://coronavirus.jhu.edu/">John Hopkins</a>
          </li>
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://www.mayoclinic.org/coronavirus-covid-19">
              Mayo Clinic
            </a>
          </li>
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://www.fns.usda.gov/disaster/pandemic/covid-19/resources-individuals-families">
              USDA
            </a>{" "}
          </li>
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://www.benefits.gov/help/faq/Coronavirus-resources">
              Government Benefits
            </a>{" "}
          </li>
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://www.ed.gov/coronavirus">Department of Education</a>{" "}
          </li>
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html">
              Find a Testing Site
            </a>{" "}
          </li>
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://childcare.gov/covid-19">Childcare Information</a>{" "}
          </li>
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://www.cdc.gov/nutrition/resources-publications/food-and-food-system-resources-during-covid-19-pandemic.html">
              Food Resources
            </a>{" "}
          </li>
          <li>
            <a className="items-center rounded-md hover:bg-gray-100 hover:text-red-900" href="https://www.aacap.org/AACAP/Families_and_Youth/Resource_Libraries/covid-19/resources_helping_kids_parents_cope.aspx">
              AACAP
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>

  );
}
export default Dropdown;

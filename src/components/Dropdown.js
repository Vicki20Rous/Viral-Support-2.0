import React, { useState } from "react";
import classNames from "classnames";
import "./Dropdown.css";

function Dropdown({ options, onOptionSelect }) {
  // Keep track of whether the dropdown is open or not.
  const [isActive, setActive] = useState(false);
  return (
    <div>
      {" "}
      <button
        onClick={() => setActive(!isActive)}
        className="items-center hover:bg-red-600 hover:text-white py-2 px-2 mr-2 text-red-800 sm:text-xs md:text-sm lg:text-base xl:text-lg font-serif active"      >
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
        {options.map((option) => (
          <div key={option} onClick={(e) => onOptionSelect(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dropdown;

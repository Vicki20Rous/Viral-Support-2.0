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
        activeClassName="text-white"
        className="items-center py-2 px-2 mr-2 text-red-800 hover:text-blue-800 text-2xl font-serif active"
      >
        Resources
      </button>
      <div
        id="menu"
        style={{ position: "absolute" }}
        class={classNames(
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

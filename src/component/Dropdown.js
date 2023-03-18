import React, { useState } from "react";
import { serviceDropdown } from "./NavItem";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <span key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
               <span className="submenu-item-text">{item.title}</span> 
              </Link>
            </span>
          );
        })}
      </div>
    </>
  );
}

export default Dropdown;
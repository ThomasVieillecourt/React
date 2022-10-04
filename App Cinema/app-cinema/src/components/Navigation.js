import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header">
      <h1>React Movies</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/accueil"
              className={(nav) =>
                nav.isActive ? "nav-active" : "nav-inactive"
              }
            >
              Acccueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/collection"
              className={(nav) =>
                nav.isActive ? "nav-active" : "nav-inactive"
              }
            >
              Ma collection
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

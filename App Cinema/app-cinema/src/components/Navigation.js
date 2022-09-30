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
              to="/coups-de-coeur"
              className={(nav) =>
                nav.isActive ? "nav-active" : "nav-inactive"
              }
            >
              Coups de coeur
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

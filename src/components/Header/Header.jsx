import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="header">
    <NavLink to="/films" activeClassName="active">
      Films
    </NavLink>
    <NavLink to="/characters?page=1" activeClassName="active">
      Characters
    </NavLink>
    <NavLink to="/planets?page=1" activeClassName="active">
      Planets
    </NavLink>
  </nav>
);

export default Header;

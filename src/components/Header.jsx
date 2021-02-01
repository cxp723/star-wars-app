import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="header">
    <NavLink to="/films" activeClassName="active">
      Films
    </NavLink>
    {/* <NavLink to="/characters" activeClassName="active">
      Characters
    </NavLink> */}
    <NavLink to="/planets?page=1" activeClassName="active">
      Planets
    </NavLink>
  </div>
);

export default Header;

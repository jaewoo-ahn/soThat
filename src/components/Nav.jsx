import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">SOThaT</Link>
      </div>
      <div className="navLinks">
        <div className="nav-items">
          <Link to="/">SOThaT</Link>
        </div>
        <div className="nav-items">
          <Link to="/">SOThaT</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

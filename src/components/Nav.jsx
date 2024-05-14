import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="fixed w-full flex justify-between">
      <div className="m-[2em] font-sm font-[1.5vw];">
        <Link to="/">SOThaT</Link>
      </div>

      <div className="flex">
        <div className="nav-items">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-items">
          <Link to="/cafemenu">Cafe</Link>
        </div>
        <div className="nav-items">
          <Link to="/barmenu">Bar</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

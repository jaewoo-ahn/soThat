import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="fixed w-full flex justify-between items-center bg-white">
      <div className="p-3">
        <Link to="/">
          <p className="text-2xl text-red-900 font-bold">
            SO<span className=" font-semibold">ThaT</span>
          </p>
        </Link>
      </div>

      <div className="flex text-md">
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

import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail, FaHome } from "react-icons/fa";
import { IoMdCafe } from "react-icons/io";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Nav = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="fixed w-full flex justify-between items-center bg-[rgba(0,0,0,0.5)] rounded-b-lg shadow-lg shadow-gray-500">
      <div className="p-3">
        <Link to="/">
          <p className="text-2xl text-red-900 font-bold">
            SO<span className=" font-semibold">ThaT</span>
          </p>
        </Link>
      </div>
      {}
      <div className="flex text-md items-center justify-center ">
        <div className="nav-items ">
          <Link to="/">
            <FaHome size={35} />
          </Link>
        </div>
        <div className="nav-items ml-3 mt-1">
          <Link to="/cafemenu">
            <IoMdCafe size={35} />
          </Link>
        </div>
        <div className="nav-items ml-3 mb-1 mr-3">
          <Link to="/barmenu">
            <FaCocktail size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

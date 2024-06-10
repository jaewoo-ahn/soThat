import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail, FaHome } from "react-icons/fa";
import { IoMdCafe } from "react-icons/io";
import { LuDessert } from "react-icons/lu";

import useMediaQuery from "../hooks/useMediaQuery";

const Nav = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="fixed w-full flex justify-between items-center bg-[#C6D5C6] rounded-b-lg shadow-lg shadow-gray-500 font-blackhans">
      <div className="p-3 flex items-center justify-center">
        <Link to="/">
          <p className="text-2xl text-red-900 font-bold pt-1">
            SO<span className=" font-semibold">ThaT</span>
          </p>
        </Link>
        <div className="w-[2rem] h-[2rem] ">
          <img
            src="/images/sothat.png"
            className="rounded-full w-full h-full"
            alt=""
          />
        </div>
      </div>
      {isAboveMediumScreens ? (
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
          <div className="nav-items ml-3 mb-1 mr-2">
            <Link to="/barmenu">
              <FaCocktail size={35} />
            </Link>
          </div>
          <div className="nav-items  mb-1 mr-3">
            <Link to="/snack">
              <LuDessert size={35} />
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nav;

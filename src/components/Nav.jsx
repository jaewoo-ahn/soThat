import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail, FaHome } from "react-icons/fa";
import { IoMdCafe } from "react-icons/io";
import { LuDessert } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import useMediaQuery from "../hooks/useMediaQuery";

const Nav = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const applyStyles = (word) => {
    return word.split("").map((char, index) => (
      <span key={index} className={index % 2 === 1 ? "text-red-900" : ""}>
        {char}
      </span>
    ));
  };

  const [isOpen, setIsOpen] = useState(false);

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
        <div className="pr-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={45} />
        </div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50"
          >
            <div className="flex flex-col items-center p-4">
              <button
                className="self-end mb-4 text-[2rem]"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              <Link to="/" onClick={() => setIsOpen(false)} className="mt-4">
                <p className="text-[3rem]">{applyStyles("HOME")}</p>
              </Link>
              <Link
                to="/cafemenu"
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <p className="text-[3rem]">{applyStyles("CAFE")}</p>
              </Link>
              <Link
                to="/barmenu"
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <p className="text-[3rem]">{applyStyles("DRINK")}</p>
              </Link>
              <Link
                to="/snack"
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <p className="text-[3rem]">{applyStyles("SNACK")}</p>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;

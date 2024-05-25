import React from "react";
import transition from "../transition";
import { cafe } from "../data/cafe";

const CafeMenu = () => {
  return (
    <div className="flex h-screen items-center justify-around">
      <div className="w-1/3 ">
        <p className="w-full border-b-2 border-black">Coffee</p>
      </div>
      <div className="w-1/3">
        <p className="w-full border-b-2 border-black">NON Coffee</p>
      </div>
    </div>
  );
};

export default transition(CafeMenu);

import React from "react";
import transition from "../transition";

const CafeMenu = () => {
  return (
    <div>
      <h1 className="w-[80% absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-[10vw] font-bold">
        CafeMenu
      </h1>
    </div>
  );
};

export default transition(CafeMenu);

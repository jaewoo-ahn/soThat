import React from "react";
import transition from "../transition";
import { cafe } from "../data/cafe";

const CafeMenu = () => {
  return (
    <div className="flex h-screen items-center justify-around">
      <div className="w-1/3 ">
        <p className="w-full border-b-2 border-black">Coffee</p>
        <div>
          {cafe[0].coffee.map((res, idx) => {
            return (
              <div key={idx}>
                <p>{res.name}</p>
                <p>{res.price}</p>
              </div>
            );
          })}
        </div>
        <p className="">사이즈업 +2500 샷추가 +500 크림추가 +500</p>
      </div>
      <div className="w-1/3">
        <p className="w-full border-b-2 border-black">NON Coffee</p>
      </div>
    </div>
  );
};

export default transition(CafeMenu);

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
              <div key={idx} className="flex w-full justify-between">
                <div className="flex">
                  <p>{res.name}</p>
                  {res.best ? <p className="text-red-900 ml-2">BEST</p> : <></>}
                  {res.signiture ? (
                    <p className="text-red-900 ml-2">SIGNATURE</p>
                  ) : (
                    <></>
                  )}
                </div>
                <p>{res.price}</p>
              </div>
            );
          })}
        </div>
        <p className="">사이즈업 +2500 샷추가 +500 크림추가 +500</p>
      </div>
      <div className="w-1/3">
        <p className="w-full border-b-2 border-black">NON Coffee</p>
        <div>
          {cafe[0].nonecoffee.map((res, idx) => {
            return (
              <div key={idx} className="flex w-full justify-between">
                <p>{res.name}</p>
                <p>{res.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default transition(CafeMenu);

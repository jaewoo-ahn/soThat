import React from "react";
import transition from "../transition";
import { cafe } from "../data/cafe";

const CafeMenu = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen items-start justify-around sm:mt-20">
      <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
        <p className="w-full border-b-2 border-black text-3xl font-blackhans p-2">
          Coffee
        </p>
        <div className="mt-2 px-8 sm:px-0">
          {cafe[0].coffee.map((res, idx) => {
            return (
              <div
                key={idx}
                className="flex w-full justify-between font-blackhans text-2xl py-2"
              >
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
        <p className="pt-7 sm:pt-20 pl-4 sm:pl-0 font-blackhans">
          사이즈업 +2500 샷추가 +500 크림추가 +500
        </p>
      </div>
      <div className="w-full sm:w-1/3">
        <p className="w-full border-b-2 border-black text-3xl font-blackhans p-2">
          NON Coffee
        </p>
        <div className="mt-2 px-8 sm:px-0">
          {cafe[0].nonecoffee.map((res, idx) => {
            return (
              <div
                key={idx}
                className="flex w-full justify-between font-blackhans text-2xl py-2"
              >
                <p>{res.name}</p>
                <p>{res.price}</p>
              </div>
            );
          })}
          <div className="pt-7 sm:pt-20 pl-4 sm:pl-0 font-blackhans">
            <div className="flex justify-between font-blackhans text-2xl">
              <p>Tea</p>
              <p>5,800</p>
            </div>
            <div className="flex font-blackhans text-1xl">
              {cafe[0].tea.map((res, idx) => {
                return <p key={idx} className="ml-1">{`(${res})`}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(CafeMenu);

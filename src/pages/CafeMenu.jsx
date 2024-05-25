import React from "react";
import transition from "../transition";
import { cafe } from "../data/cafe";

const CafeMenu = () => {
  return (
    <div className="flex h-screen items-center justify-around">
      <div className="w-1/3 ">
        <p className="w-full border-b-2 border-black text-3xl font-blackhans p-2">
          Coffee
        </p>
        <div className="mt-2">
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
        <p className=" pt-20 font-blackhans">
          사이즈업 +2500 샷추가 +500 크림추가 +500
        </p>
      </div>
      <div className="w-1/3">
        <p className="w-full border-b-2 border-black text-3xl font-blackhans p-2">
          NON Coffee
        </p>
        <div className="mt-2">
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
          <div className="pt-20 ">
            <div className="flex justify-between font-blackhans text-2xl">
              <p>Tea</p>
              <p>5,000</p>
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

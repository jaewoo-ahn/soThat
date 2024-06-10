import React from "react";
import transition from "../transition";
import { cafe } from "../data/cafe";
import { snack } from "../data/snack";

const Snack = () => {
  return (
    <div className="flex h-screen items-start justify-around mt-20">
      <div className="w-1/3 ">
        <p className="w-full border-b-2 border-black text-3xl font-blackhans p-2">
          Coffee
        </p>
        <div className="mt-2">
          {snack.map((res, idx) => {
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
      </div>
    </div>
  );
};

export default transition(Snack);

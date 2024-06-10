import React from "react";

const Menubox = ({ base, items }) => {
  return (
    <div className="w-full mt-10 px-10">
      <p className="w-full border-b-2 border-black text-3xl font-blackhans p-2">
        {base}
      </p>
      <div className="mt-2">
        {items.map((res, idx) => {
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
  );
};

export default Menubox;

//todo email로 손님이 추가하고싶은거 !!

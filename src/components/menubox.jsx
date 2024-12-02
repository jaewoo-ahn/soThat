import React, { useState } from "react";

const Menubox = ({ base, items, ingredient }) => {
  console.log(ingredient);
  const [openIngredient, setOpenIngredient] = useState(false);
  return (
    <div className="w-full mt-8 px-10">
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
                <p
                  onClick={() => {
                    setOpenIngredient(!openIngredient);
                    console.log(openIngredient);
                  }}
                >
                  {res.name}
                </p>
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

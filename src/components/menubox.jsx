import React, { useState } from "react";

const Menubox = ({ base, items }) => {
  const [openIngredients, setOpenIngredients] = useState(
    Array(items.length).fill(false) // 각 아이템별 초기 상태를 false로 설정
  );

  const toggleIngredient = (index) => {
    setOpenIngredients((prev) =>
      prev.map((state, idx) => (idx === index ? !state : state))
    );
  };

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
              className="flex flex-col w-full font-blackhans text-2xl py-4 border-b border-gray-300"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p
                    onClick={() => toggleIngredient(idx)} // 특정 아이템의 상태 변경
                    className="cursor-pointer"
                  >
                    {res.name}
                  </p>
                  {res.best && <p className="text-red-900 ml-4">BEST</p>}
                  {res.signiture && (
                    <p className="text-red-900 ml-4">SIGNATURE</p>
                  )}
                </div>
                <p>{res.price}</p>
              </div>
              {openIngredients[idx] &&
                res.ingredient &&
                res.ingredient.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 ">
                    {res.ingredient.map((ing, i) => (
                      <p
                        key={i}
                        className="text-sm font-sans font-bold text-gray-600"
                      >
                        - {ing}
                      </p>
                    ))}
                  </div>
                )}
              {openIngredients[idx] &&
                (!res.ingredient || res.ingredient.length === 0) && (
                  <p className="mt-2  text-gray-500 text-sm font-sans">
                    No ingredients available.
                  </p>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menubox;

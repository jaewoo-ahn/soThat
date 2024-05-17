import React from "react";
import transition from "../transition";

const Home = () => {
  return (
    <div className="">
      <h1 className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-[10vw] font-bold">
        Home
      </h1>
    </div>
  );
};

export default transition(Home);

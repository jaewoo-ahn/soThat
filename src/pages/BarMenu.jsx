import React from "react";
import transition from "../transition";
import { barmenu } from "../data/bar";
import Menubox from "../components/menubox";

const BarMenus = () => {
  return (
    <section className="flex h-screen items-start justify-around">
      <Menubox base={barmenu[0].base} items={barmenu[0].items} />
      <div className="w-1/2">
        <Menubox base={barmenu[1].base} items={barmenu[1].items} />
        <Menubox base={barmenu[2].base} items={barmenu[2].items} />
      </div>
    </section>
  );
};

export default transition(BarMenus);

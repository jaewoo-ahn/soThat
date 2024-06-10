import React from "react";
import transition from "../transition";
import { barmenu } from "../data/bar";
import Menubox from "../components/menubox";

const BarMenus = () => {
  return (
    <section className="flex h-screen items-start justify-around">
      <div className="w-1/2">
        <Menubox base={barmenu[0].base} items={barmenu[0].items} />
        <Menubox base={barmenu[5].base} items={barmenu[5].items} />
        <Menubox base={barmenu[6].base} items={barmenu[6].items} />
        <Menubox base={barmenu[9].base} items={barmenu[9].items} />
      </div>
      <div className="w-1/2">
        <Menubox base={barmenu[1].base} items={barmenu[1].items} />
        <Menubox base={barmenu[3].base} items={barmenu[3].items} />
        <Menubox base={barmenu[7].base} items={barmenu[7].items} />
      </div>
      <div className="w-1/2">
        <Menubox base={barmenu[2].base} items={barmenu[2].items} />
        <Menubox base={barmenu[4].base} items={barmenu[4].items} />
        <Menubox base={barmenu[8].base} items={barmenu[8].items} />
      </div>
    </section>
  );
};

export default transition(BarMenus);

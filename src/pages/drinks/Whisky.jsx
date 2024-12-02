import transition from "../../transition";
import { barmenu } from "../../data/bar";
import Menubox from "../../components/menubox";

const Whisky = () => {
  const item = barmenu[3].items[0];
  const ingredient = item.ingredient ? item.ingredient : [];

  return (
    <section className="flex flex-col md:flex-row h-screen items-start justify-around">
      <div className="md:w-1/2 w-full">
        <Menubox
          base={barmenu[3].base}
          items={barmenu[3].items}
          ingredient={ingredient}
        />
      </div>
    </section>
  );
};

export default transition(Whisky);

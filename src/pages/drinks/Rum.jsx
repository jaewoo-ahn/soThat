import transition from "../../transition";
import { barmenu } from "../../data/bar";
import Menubox from "../../components/menubox";

const Rum = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-start justify-around">
      <div className="md:w-1/2 w-full">
        <Menubox
          base={barmenu[4].base}
          items={barmenu[4].items}
          ingredient={barmenu[4].ingreident}
        />
      </div>
    </section>
  );
};

export default transition(Rum);

import transition from "../../transition";
import { barmenu } from "../../data/bar";
import Menubox from "../../components/menubox";

const Vodka = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-start justify-around">
      <div className="md:w-1/2 w-full">
        <Menubox
          base={barmenu[0].base}
          items={barmenu[0].items}
          ingredient={barmenu[0].ingreident}
        />
      </div>
    </section>
  );
};

export default transition(Vodka);

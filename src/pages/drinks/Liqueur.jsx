import transition from "../../transition";
import { barmenu } from "../../data/bar";
import Menubox from "../../components/menubox";

const Liqueur = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-start justify-around">
      <div className="md:w-1/2 w-full">
        <Menubox
          base={barmenu[7].base}
          items={barmenu[7].items}
          ingredient={barmenu[7].ingreident}
        />
      </div>
    </section>
  );
};

export default transition(Liqueur);

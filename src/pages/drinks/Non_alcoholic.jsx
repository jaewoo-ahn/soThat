import transition from "../../transition";
import { barmenu } from "../../data/bar";
import Menubox from "../../components/menubox";

const NonAlcoholic = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-start justify-around">
      <div className="md:w-1/2 w-full">
        <Menubox
          base={barmenu[5].base}
          items={barmenu[5].items}
          ingredient={barmenu[5].ingreident}
        />
      </div>
    </section>
  );
};

export default transition(NonAlcoholic);

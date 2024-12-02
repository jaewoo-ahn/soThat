import transition from "../../transition";
import { barmenu } from "../../data/bar";
import Menubox from "../../components/menubox";

const Tequila = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-start justify-around">
      <div className="md:w-1/2 w-full">
        <Menubox
          base={barmenu[1].base}
          items={barmenu[1].items}
          ingredient={barmenu[1].ingreident}
        />
      </div>
    </section>
  );
};

export default transition(Tequila);

import transition from "../../transition";
import { barmenu } from "../../data/bar";
import Menubox from "../../components/menubox";

const Hihgball = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-start justify-around">
      <div className="md:w-1/2 w-full">
        <Menubox
          base={barmenu[9].base}
          items={barmenu[9].items}
          ingredient={barmenu[2].ingreident}
        />
      </div>
    </section>
  );
};

export default transition(Hihgball);
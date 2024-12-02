import transition from "../../transition";
import { barmenu } from "../../data/bar";
import Menubox from "../../components/menubox";

const Glass = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-start justify-around">
      <div className="md:w-1/2 w-full">
        <Menubox base={barmenu[8].base} items={barmenu[8].items} />
      </div>
    </section>
  );
};

export default transition(Glass);

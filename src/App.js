import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Nav } from "./components";
import { Home, CafeMenu, BarMenu, Snack } from "./pages";
import {
  Beer,
  Gin,
  Glass,
  Highball,
  Liqueur,
  NonAlcoholic,
  Rum,
  Tequila,
  Vodka,
  Whisky,
} from "./pages/drinks";

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <div className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/cafemenu" element={<CafeMenu />} />
            <Route path="/barmenu" element={<BarMenu />} />
            <Route path="/snack" element={<Snack />} />
            <Route path="/beer" element={<Beer />} />
            <Route path="/gin" element={<Gin />} />
            <Route path="/glass" element={<Glass />} />
            <Route path="/highball" element={<Highball />} />
            <Route path="/liqueur" element={<Liqueur />} />
            <Route path="/nonalcoholic" element={<NonAlcoholic />} />
            <Route path="/run" element={<Rum />} />
            <Route path="/tequila" element={<Tequila />} />
            <Route path="/vodka" element={<Vodka />} />
            <Route path="/whisky" element={<Whisky />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;

import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Nav } from "./components";
import { Home, CafeMenu, BarMenu, BarSecondMenu, Snack } from "./pages";

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/cafemenu" element={<CafeMenu />} />
          <Route path="/barmenu" element={<BarMenu />} />
          <Route path="/barsecondmenu" element={<BarSecondMenu />} />
          <Route path="/snack" element={<Snack />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

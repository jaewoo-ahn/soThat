import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Nav } from "./components";
import { Home, CafeMenu, BarMenu } from "./pages";

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
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

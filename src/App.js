import { useLocation, Route, Routes } from "react-router-dom";

import { Nav } from "./components";
import { Home } from "./pages";
import CafeMenu from "./pages/CafeMenu";
import BarMenu from "./pages/BarMenu";

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/cafemenu" element={<CafeMenu />} />
        <Route path="/barmenu" element={<BarMenu />} />
      </Routes>
    </>
  );
}

export default App;

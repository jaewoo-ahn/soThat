import { useLocation, Route, Routes } from "react-router-dom";

import { Nav } from "./components";
import { BarMenu, CafeMenu, Home } from "./pages";

function App() {
  const location = useLocation;

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

import { useLocation, Route, Routes } from "react-router-dom";

import { Nav } from "./components";
import { BarMenus, CafeMenu } from "./pages";

function App() {
  const location = useLocation;

  return (
    <>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;

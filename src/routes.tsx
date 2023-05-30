import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Experiencia from "./pages/Experiencia";
import Setores from "./pages/Setores";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Experiencia} path="/experiencia" />
        <Route Component={Setores} path="/setores"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
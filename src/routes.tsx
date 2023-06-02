import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Experiencia from "./pages/Experiencia";
import Setores from "./pages/Setores";
import Informacoes from "./pages/Informacoes";
import Ingresso from "./pages/Ingresso";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Experiencia} path="/experiencia" />
        <Route Component={Setores} path="/setores"/>
        <Route Component={Informacoes} path="/informacoes" />
        <Route Component={Ingresso} path="/ingresso" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
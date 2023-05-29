import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Experiencia from "./pages/Experiencia";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Experiencia} path="/experiencia" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
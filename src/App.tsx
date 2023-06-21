import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Experiencia from './pages/Experiencia';
import Setores from './pages/Setores';
import Informacoes from './pages/Informacoes';
import IngressoForm from './pages/Ingresso';
import IngressoResultado from './pages/IngressoResultado';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/setores" element={<Setores />} />
          <Route path="/informacoes" element={<Informacoes />} />
          <Route path="/ingresso" element={<IngressoForm />} />
          <Route path="/ingresso-resumo" element={<IngressoResultado />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;

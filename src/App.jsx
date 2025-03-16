import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './estilos/Global.css';

// Componentes
import Cabecalho from './componentes/Cabecalho';
import BarraNavegacao from './componentes/BarraNavegacao';

// Páginas
import Nutricao from './paginas/Nutricao';
import Suplementos from './paginas/Suplementos';
import Progresso from './paginas/Progresso';

function App() {
  const [semanaAtual, setSemanaAtual] = useState(1);

  return (
    <BrowserRouter>
      <div className="app">
        <Cabecalho semanaAtual={semanaAtual} totalSemanas={4} />

        <div className="container">
          <Routes>
            <Route path="/" element={<Nutricao semanaAtual={semanaAtual} setSemanaAtual={setSemanaAtual} />} />
            <Route path="/suplementos" element={<Suplementos />} />
            <Route path="/progresso" element={<Progresso />} />
          </Routes>
        </div>

        <BarraNavegacao />
      </div>
    </BrowserRouter>
  );
}

export default App;
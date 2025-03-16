import React from 'react';
import '../estilos/SeletorSemana.css';

const SeletorSemana = ({ semanaAtiva, mudarSemana }) => {
  return (
    <div className="week-select">
      <button 
        className={semanaAtiva === 1 ? "week-btn active" : "week-btn"} 
        onClick={() => mudarSemana(1)}
      >
        SEMANA 1
      </button>
      <button 
        className={semanaAtiva === 2 ? "week-btn active" : "week-btn"} 
        onClick={() => mudarSemana(2)}
      >
        SEMANA 2
      </button>
      <button 
        className={semanaAtiva === 3 ? "week-btn active" : "week-btn"} 
        onClick={() => mudarSemana(3)}
      >
        SEMANA 3
      </button>
      <button 
        className={semanaAtiva === 4 ? "week-btn active" : "week-btn"} 
        onClick={() => mudarSemana(4)}
      >
        SEMANA 4
      </button>
    </div>
  );
};

export default SeletorSemana;
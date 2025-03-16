import React from 'react';
import '../estilos/CartaoRefeicao.css';

const CartaoRefeicao = ({ titulo, horario, alimentos, dicas }) => {
  return (
    <div className="exercise">
      <div className="exercise-name">
        {titulo} {horario && <span className="horario">({horario})</span>}
      </div>

      <div className="stats">
        {alimentos.map((alimento, index) => (
          <div className="stat" key={index}>{alimento}</div>
        ))}
      </div>

      {dicas && dicas.length > 0 && (
        <div className="details">
          {dicas.map((dica, index) => (
            <p key={index}>• {dica}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartaoRefeicao;

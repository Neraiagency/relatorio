import React, { useState } from 'react';

const CalculadoraAgua = () => {
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);
  
  const calcular = () => {
    if (peso > 0) {
      setResultado(Math.round(peso * 50));
    }
  };
  
  return (
    <div className="exercise calculadora">
      <div className="exercise-name">
        <span className="icon">💧</span> Calculadora de Água Diária
      </div>
      <div className="calculadora-form">
        <input 
          type="number" 
          placeholder="Seu peso (kg)" 
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="calculadora-input"
        />
        <button 
          onClick={calcular}
          className="calculadora-button"
        >
          Calcular
        </button>
      </div>
      
      {resultado && (
        <div className="resultado-agua">
          <div className="agua-gauge">
            <div className="agua-fill" style={{ height: `${Math.min(100, resultado/40)}%` }}></div>
          </div>
          <div className="agua-info">
            <div className="agua-amount">{resultado}ml</div>
            <div className="agua-cups">{Math.round(resultado/250)} copos de 250ml</div>
          </div>
        </div>
      )}
      
      <div className="details">
        <p>• A fórmula utilizada é: Peso (kg) x 50ml = Quantidade de água diária</p>
        <p>• Para atividade física intensa, considere aumentar para 60ml por kg</p>
        <p>• Distribuir o consumo ao longo do dia é melhor que beber grandes quantidades de uma vez</p>
      </div>
    </div>
  );
};

export default CalculadoraAgua;
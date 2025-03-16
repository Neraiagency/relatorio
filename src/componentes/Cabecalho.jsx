import React from 'react';
import '../estilos/Cabecalho.css';
import logoImagem from '../imagens/mavinhosquad.jpeg';  // Import correto

const Cabecalho = ({ semanaAtual, totalSemanas }) => {
    const progresso = (semanaAtual / totalSemanas) * 100;

    return (
        <header>
            <div className="logo-container">
                <img
                    src={logoImagem}
                    alt="Mavinho Squad"
                    className="logo-header"
                />
            </div>
            <h1 className="projeto-titulo">SECANDO BUCHO</h1>
            <div className="subtitle">Transformação em 30 Dias</div>
            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${progresso}%` }}
                ></div>
            </div>
        </header>
    );
};

export default Cabecalho;
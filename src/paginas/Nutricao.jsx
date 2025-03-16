import React from 'react';
import SeletorSemana from '../componentes/SeletorSemana';
import CartaoRefeicao from '../componentes/CartaoRefeicao';
import CalculadoraAgua from '../componentes/CalculadoraAgua';
import DicasPreparacao from '../componentes/DicasPreparacao';
import { planoNutricional } from '../dados/planoNutricional';

const Nutricao = ({ semanaAtual, setSemanaAtual }) => {
    // Verificação de segurança para índices
    const semanaIndex = Math.min(Math.max(0, semanaAtual - 1), planoNutricional.length - 1);
    const planoSemanal = planoNutricional[semanaIndex];

    // Placeholder caso não haja dados
    if (!planoSemanal || !planoSemanal.refeicoes || planoSemanal.refeicoes.length === 0) {
        return (
            <div>
                <SeletorSemana semanaAtiva={semanaAtual} mudarSemana={setSemanaAtual} />
                <div className="section">
                    <h2>Plano Nutricional - Semana {semanaAtual}</h2>
                    <p style={{ color: '#aaa', textAlign: 'center', padding: '20px' }}>
                        Dados para esta semana em desenvolvimento. Em breve!
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <SeletorSemana semanaAtiva={semanaAtual} mudarSemana={setSemanaAtual} />

            <div className="section">
                <h2>Plano de Cutting - Semana {semanaAtual}</h2>

                <div className="exercise">
                    <div className="exercise-name">Sobre esta fase: {planoSemanal.titulo}</div>
                    <div className="details">
                        <p>{planoSemanal.descricao}</p>
                        <p>Déficit calórico: {planoSemanal.deficitCalorico}</p>
                    </div>
                </div>

                <div className="overview">
                    <div className="card">
                        <h3>CALORIAS</h3>
                        <p>{planoSemanal.calorias} KCAL</p>
                    </div>
                    <div className="card">
                        <h3>PROTEÍNAS</h3>
                        <p>{planoSemanal.macros.proteina}g</p>
                    </div>
                    <div className="card">
                        <h3>CARBS</h3>
                        <p>{planoSemanal.macros.carboidratos}g</p>
                    </div>
                    <div className="card">
                        <h3>GORDURAS</h3>
                        <p>{planoSemanal.macros.gorduras}g</p>
                    </div>
                </div>

                {/* Plano alimentar diário */}
                {planoSemanal.refeicoes.map((refeicao, index) => (
                    <CartaoRefeicao
                        key={index}
                        titulo={refeicao.titulo}
                        horario={refeicao.horario}
                        alimentos={refeicao.alimentos}
                        dicas={refeicao.dicas}
                    />
                ))}

                {/* Refeição livre */}
                {planoSemanal.refeicaoLivre && (
                    <div className="exercise">
                        <div className="exercise-name">{planoSemanal.refeicaoLivre.titulo}</div>
                        <div className="stats">
                            {planoSemanal.refeicaoLivre.exemplos.map((exemplo, index) => (
                                <div className="stat" key={index}>{exemplo}</div>
                            ))}
                        </div>
                        <div className="details">
                            {planoSemanal.refeicaoLivre.dicas.map((dica, index) => (
                                <p key={index}>• {dica}</p>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tabelas de equivalência */}
                {planoSemanal.equivalencias && planoSemanal.equivalencias.map((tabela, index) => (
                    <div className="exercise" key={index}>
                        <div className="exercise-name">{tabela.titulo}</div>
                        <div className="details">
                            {tabela.itens.map((item, i) => (
                                <p key={i}>• {item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Calculadora de Água */}
            <div className="section">
                <h2>Ferramentas Úteis</h2>
                <CalculadoraAgua />
            </div>

            {/* Dicas de preparação e organização */}
            <DicasPreparacao />
        </div>
    );
};

export default Nutricao;
import React from 'react';
import { suplementos } from '../dados/suplementos';

const Suplementos = () => {
    return (
        <div className="section">
            <h2>Suplementação Recomendada</h2>

            {suplementos.map((suplemento, index) => (
                <div className="exercise" key={index}>
                    <div className="exercise-name">{suplemento.nome}</div>
                    <div className="stats">
                        <div className="stat">Dosagem: {suplemento.dosagem}</div>
                        <div className="stat">Timing: {suplemento.timing}</div>
                        {suplemento.prioridade && (
                            <div className="stat">Prioridade: {suplemento.prioridade}</div>
                        )}
                    </div>

                    <div className="details">
                        {suplemento.beneficios.map((beneficio, i) => (
                            <p key={i}>• {beneficio}</p>
                        ))}
                    </div>
                </div>
            ))}

            <div className="exercise">
                <div className="exercise-name">Orientações Gerais</div>
                <div className="details">
                    <p>• Suplementos são complementos, não substituem uma alimentação adequada</p>
                    <p>• Consulte seu médico antes de iniciar o uso de qualquer suplemento</p>
                    <p>• A qualidade dos suplementos é importante - priorize marcas certificadas</p>
                    <p>• Respeite as dosagens recomendadas para cada suplemento</p>
                    <p>• A consistência é mais importante que a quantidade</p>
                </div>
            </div>
        </div>
    );
};

export default Suplementos;
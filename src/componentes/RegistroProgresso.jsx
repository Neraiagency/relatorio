import React from 'react';

const RegistroProgresso = ({ tipo, label, valores, onChange, unidade }) => {
    // Calcula diferenças entre medidas iniciais e atuais
    const calcularDiferenca = (indice) => {
        if (!valores[0] || !valores[indice]) return '';

        const diferenca = valores[indice] - valores[0];
        const sinal = diferenca > 0 ? '+' : '';

        return `(${sinal}${diferenca.toFixed(1)})`;
    };

    return (
        <tr>
            <td>{label} {unidade && `(${unidade})`}</td>
            {valores.map((valor, i) => (
                <td key={i}>
                    <input
                        type="number"
                        value={valor}
                        style={{
                            width: '100%',
                            background: 'transparent',
                            color: '#fff',
                            border: '1px solid #444',
                            padding: '5px'
                        }}
                        onChange={(e) => onChange(tipo, i, e.target.value)}
                    />
                    {i > 0 && valor && (
                        <span style={{
                            fontSize: '12px',
                            color: parseFloat(valor) < parseFloat(valores[0])
                                ? '#4CD964' // Verde para valores menores (progresso positivo)
                                : '#FF3B30'  // Vermelho para valores maiores (progresso negativo)
                        }}>
                            {calcularDiferenca(i)}
                        </span>
                    )}
                </td>
            ))}
        </tr>
    );
};

export default RegistroProgresso;
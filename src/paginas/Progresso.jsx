import React, { useState, useEffect } from 'react';
import { metricasIniciais, objetivosProgresso } from '../dados/metricasProgresso';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import RegistroFotos from '../componentes/RegistroFotos';

// Importe o arquivo de estilos para as fotos
import '../estilos/FotosStyle.css';

// Registrar componentes Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Progresso = () => {
    const [metricas, setMetricas] = useState({ ...metricasIniciais });
    const [secaoAtiva, setSecaoAtiva] = useState('dados'); // 'dados', 'graficos', 'fotos'

    // Carrega dados salvos do localStorage ao iniciar
    useEffect(() => {
        const dadosSalvos = localStorage.getItem('progresso_metricas');
        if (dadosSalvos) {
            setMetricas(JSON.parse(dadosSalvos));
        }
    }, []);

    // Função para atualizar uma métrica específica
    const atualizarMetrica = (tipo, semana, valor) => {
        setMetricas(prev => {
            const novasMetricas = { ...prev };
            novasMetricas[tipo][semana] = valor;

            // Salva no localStorage
            localStorage.setItem('progresso_metricas', JSON.stringify(novasMetricas));

            return novasMetricas;
        });
    };

    // Calcula diferenças entre medidas iniciais e atuais
    const calcularDiferenca = (tipo, indice) => {
        if (!metricas[tipo][0] || !metricas[tipo][indice]) return '';

        const diferenca = metricas[tipo][indice] - metricas[tipo][0];
        const sinal = diferenca > 0 ? '+' : '';

        return `${sinal}${diferenca.toFixed(1)}`;
    };

    // Calcula a cor baseada no progresso (verde para bom, vermelho para ruim)
    const getProgressColor = (tipo, indice) => {
        if (!metricas[tipo][0] || !metricas[tipo][indice]) return 'neutral';

        const diferenca = metricas[tipo][indice] - metricas[tipo][0];
        // Para peso, gordura e medidas, menor é melhor
        const isPositiveProgress = diferenca < 0;

        return isPositiveProgress ? 'positive' : 'negative';
    };

    // Calcula progresso percentual
    const calcularPorcentagem = (tipo, indice) => {
        if (!metricas[tipo][0] || !metricas[tipo][indice]) return 0;

        const inicial = parseFloat(metricas[tipo][0]);
        const atual = parseFloat(metricas[tipo][indice]);
        const diferenca = atual - inicial;

        // Limitamos a +/- 15% para visualização da barra
        const porcentagem = Math.max(Math.min((diferenca / inicial) * 100, 15), -15);
        return porcentagem;
    };

    // Verificar se há dados suficientes para gráficos
    const temDadosSuficientes = () => {
        return Object.values(metricas).some(valores =>
            valores.filter(v => v !== '').length >= 2
        );
    };

    // Preparar dados para os gráficos
    const prepararDadosGrafico = () => {
        const labels = ['Inicial', 'Semana 1', 'Semana 2', 'Semana 3', 'Final'];

        const datasets = Object.entries(metricas).map(([tipo, valores]) => {
            // Definir cores com base no tipo de métrica
            let borderColor, backgroundColor;

            switch (tipo) {
                case 'peso':
                    borderColor = 'rgba(255, 99, 132, 1)';
                    backgroundColor = 'rgba(255, 99, 132, 0.2)';
                    break;
                case 'gordura':
                    borderColor = 'rgba(54, 162, 235, 1)';
                    backgroundColor = 'rgba(54, 162, 235, 0.2)';
                    break;
                case 'cintura':
                    borderColor = 'rgba(255, 206, 86, 1)';
                    backgroundColor = 'rgba(255, 206, 86, 0.2)';
                    break;
                case 'quadril':
                    borderColor = 'rgba(75, 192, 192, 1)';
                    backgroundColor = 'rgba(75, 192, 192, 0.2)';
                    break;
                default:
                    borderColor = 'rgba(153, 102, 255, 1)';
                    backgroundColor = 'rgba(153, 102, 255, 0.2)';
            }

            return {
                label: tipo.charAt(0).toUpperCase() + tipo.slice(1),
                data: valores.map(v => v === '' ? null : parseFloat(v)),
                borderColor: borderColor,
                backgroundColor: backgroundColor,
                tension: 0.3,
                pointRadius: 5,
                pointHoverRadius: 8
            };
        });

        return { labels, datasets };
    };

    // Opções do gráfico
    const opcoes = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Evolução das Medidas',
                color: '#f5f5f5',
                font: {
                    size: 16
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.dataset.label || '';
                        const value = context.parsed.y || 0;
                        const index = context.dataIndex;
                        const datasetIndex = context.datasetIndex;
                        const tipo = Object.keys(metricas)[datasetIndex];

                        // Mostrar a diferença em relação ao valor inicial nas tooltips
                        if (index > 0 && metricas[tipo][0] !== '') {
                            const inicial = parseFloat(metricas[tipo][0]);
                            const diferenca = value - inicial;
                            const sinal = diferenca >= 0 ? '+' : '';
                            return `${label}: ${value} (${sinal}${diferenca.toFixed(1)})`;
                        }

                        return `${label}: ${value}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#aaaaaa'
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#aaaaaa'
                }
            }
        }
    };

    return (
        <>
            <div className="section">
                <h2>Monitoramento de Progresso</h2>

                <div className="tab-selector">
                    <button
                        className={secaoAtiva === 'dados' ? 'tab-btn active' : 'tab-btn'}
                        onClick={() => setSecaoAtiva('dados')}
                    >
                        <span className="tab-icon">📊</span>
                        <span>Dados</span>
                    </button>
                    <button
                        className={secaoAtiva === 'graficos' ? 'tab-btn active' : 'tab-btn'}
                        onClick={() => setSecaoAtiva('graficos')}
                    >
                        <span className="tab-icon">📈</span>
                        <span>Gráficos</span>
                    </button>
                    {/* Nova aba para fotos */}
                    <button
                        className={secaoAtiva === 'fotos' ? 'tab-btn active' : 'tab-btn'}
                        onClick={() => setSecaoAtiva('fotos')}
                    >
                        <span className="tab-icon">📷</span>
                        <span>Fotos</span>
                    </button>
                </div>

                {secaoAtiva === 'dados' && (
                    <>
                        <div className="exercise intro-card">
                            <div className="exercise-name">Como registrar suas medidas</div>
                            <div className="details">
                                <p>• Peso corporal: medido em jejum, após evacuação, pela manhã</p>
                                <p>• % Gordura: utilize bioimpedância ou dobras cutâneas (mesma hora do dia)</p>
                                <p>• Circunferências: utilize fita métrica, sempre na mesma posição</p>
                                <p>• Registre suas medidas semanalmente (preferencialmente no mesmo dia)</p>
                                <p>• Tire fotos de progresso em posições padronizadas</p>
                            </div>
                        </div>

                        <div className="progresso-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Métrica</th>
                                        <th>Inicial</th>
                                        <th>Semana 1</th>
                                        <th>Semana 2</th>
                                        <th>Semana 3</th>
                                        <th>Final</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(metricas).map(([tipo, valores]) => (
                                        <tr key={tipo}>
                                            <td className="metrica-label">
                                                <div className="metrica-icon">
                                                    {tipo === 'peso' ? '⚖️' :
                                                        tipo === 'gordura' ? '📉' :
                                                            tipo === 'cintura' ? '📏' : '📐'}
                                                </div>
                                                <div>
                                                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                                                    <span className="metrica-unit">
                                                        {tipo === 'peso' ? '(kg)' :
                                                            tipo === 'gordura' ? '(%)' : '(cm)'}
                                                    </span>
                                                </div>
                                            </td>
                                            {valores.map((valor, i) => (
                                                <td key={i} className={i === 0 ? "input-inicial" : ""}>
                                                    <input
                                                        type="number"
                                                        value={valor}
                                                        className="input-metrica"
                                                        onChange={(e) => atualizarMetrica(tipo, i, e.target.value)}
                                                    />
                                                    {i > 0 && valor && metricas[tipo][0] && (
                                                        <div className="diferenca-container">
                                                            <div
                                                                className={`diferenca ${getProgressColor(tipo, i)}`}
                                                            >
                                                                {calcularDiferenca(tipo, i)}
                                                            </div>
                                                            <div className="progress-indicator-container">
                                                                <div
                                                                    className={`progress-indicator ${getProgressColor(tipo, i)}`}
                                                                    style={{
                                                                        width: `${Math.abs(calcularPorcentagem(tipo, i))}%`,
                                                                        marginLeft: calcularPorcentagem(tipo, i) < 0 ? 'auto' : '0',
                                                                        marginRight: calcularPorcentagem(tipo, i) > 0 ? 'auto' : '0'
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {secaoAtiva === 'graficos' && (
                    <div className="graficos-progresso">
                        {temDadosSuficientes() ? (
                            <div className="grafico-container">
                                <Line data={prepararDadosGrafico()} options={opcoes} />
                            </div>
                        ) : (
                            <div className="graph-placeholder">
                                <div className="graph-icon">📈</div>
                                <h3>Sem dados suficientes</h3>
                                <p>É necessário preencher pelo menos dois valores (inicial e atual) para cada métrica para gerar gráficos.</p>
                            </div>
                        )}
                    </div>
                )}

                {secaoAtiva === 'fotos' && (
                    <RegistroFotos />
                )}
            </div>

            <div className="section">
                <h2>Resultados Esperados</h2>

                <div className="objetivos-cards">
                    {objetivosProgresso.map((objetivo, index) => (
                        <div className="objetivo-card" key={index}>
                            <div className="objetivo-valor">{objetivo.valor}</div>
                            <div className="objetivo-titulo">{objetivo.titulo}</div>
                            <div className="objetivo-desc">{objetivo.descricao}</div>
                        </div>
                    ))}
                </div>

                <div className="exercise">
                    <div className="exercise-name">Expectativas Realistas</div>
                    <div className="stats">
                        <div className="stat">Redução de 3-5% de gordura</div>
                        <div className="stat">Manutenção da massa muscular</div>
                        <div className="stat">Melhora na composição corporal</div>
                    </div>
                    <div className="details">
                        <p>• Lembre-se que resultados variam conforme genética e adesão ao plano</p>
                        <p>• O sucesso depende da consistência na dieta e na rotina de exercícios</p>
                        <p>• Não compare seu progresso com o de outras pessoas</p>
                        <p>• Valorize cada pequena vitória ao longo do processo</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Progresso;
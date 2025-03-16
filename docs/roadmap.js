// Versão simplificada do roadmap em JavaScript puro com React
const { useState, useEffect } = React;

// Definição do componente
function RoadmapInterativo() {
  const [faseAtiva, setFaseAtiva] = useState(1);
  const [expandido, setExpandido] = useState({});

  const toggleExpandir = (id) => {
    setExpandido(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Dados das fases
  const fases = [
    {
      id: 1,
      titulo: "Base Atual",
      periodo: "Já Implementado",
      descricao: "Fundação do aplicativo com funcionalidades básicas",
      tarefas: [
        { 
          id: "task-1-1", 
          nome: "Plano Nutricional Estático", 
          status: "Completo",
          detalhes: "Planos de alimentação para 4 semanas com déficit calórico progressivo, incluindo macronutrientes, refeições detalhadas e substituições básicas." 
        },
        { 
          id: "task-1-2", 
          nome: "Calculadora de Água", 
          status: "Completo", 
          detalhes: "Calculadora que define ingestão ideal de água baseada no peso do usuário e apresenta visualização de resultados."
        },
        { 
          id: "task-1-3", 
          nome: "Suplementos Recomendados", 
          status: "Completo", 
          detalhes: "Indicações de suplementos divididos por prioridade, incluindo dosagens, timing e benefícios específicos para cutting."
        },
        { 
          id: "task-1-4", 
          nome: "Registro de Progresso", 
          status: "Completo", 
          detalhes: "Sistema para acompanhamento manual de medidas (peso, % gordura, medidas) com visualização tabular e gráfica."
        },
        { 
          id: "task-1-5", 
          nome: "Registro Fotográfico", 
          status: "Completo", 
          detalhes: "Funcionalidade para upload e comparação de fotos nas diferentes fases da transformação (início, meio, final)."
        }
      ],
      tecnologias: ["React", "React Router", "LocalStorage", "CSS3"]
    },
    {
      id: 2,
      titulo: "Fase 1: Nutrição Inteligente",
      periodo: "Mês 1-2",
      descricao: "Implementação de IA para personalização de planos nutricionais",
      tarefas: [
        { 
          id: "task-2-1", 
          nome: "Backend Python", 
          status: "Pendente", 
          detalhes: "Criar API em Python usando Flask/FastAPI para processamento dos algoritmos de IA e comunicação com o frontend." 
        },
        { 
          id: "task-2-2", 
          nome: "Formulário Avançado de Avaliação", 
          status: "Pendente", 
          detalhes: "Desenvolver interface para coleta de dados detalhados: peso, altura, idade, nível de atividade, preferências alimentares, restrições, etc."
        },
        { 
          id: "task-2-3", 
          nome: "Geração de Planos Personalizados com IA", 
          status: "Pendente", 
          detalhes: "Implementar algoritmo que cria planos nutricionais adaptados ao perfil e necessidades específicas de cada usuário."
        },
        { 
          id: "task-2-4", 
          nome: "Sistema de Ajustes Semanais", 
          status: "Pendente", 
          detalhes: "Funcionalidade para recalibrar o plano nutricional baseado no progresso reportado semanalmente pelo usuário."
        },
        { 
          id: "task-2-5", 
          nome: "Banco de Dados de Alternativas", 
          status: "Pendente", 
          detalhes: "Expandir banco de dados alimentar com equivalências nutricionais para permitir substituições personalizadas."
        }
      ],
      tecnologias: ["Python", "Flask/FastAPI", "TensorFlow/PyTorch", "MongoDB", "APIs RESTful"]
    },
    {
      id: 3,
      titulo: "Fase 2: Assistente Nutricional",
      periodo: "Mês 3-4",
      descricao: "Implementação de chatbot inteligente para suporte contínuo",
      tarefas: [
        { 
          id: "task-3-1", 
          nome: "Modelo NLP Especializado", 
          status: "Pendente", 
          detalhes: "Desenvolver/adaptar modelo de processamento de linguagem natural especializado em nutrição, treino e emagrecimento." 
        },
        { 
          id: "task-3-2", 
          nome: "Interface de Chat", 
          status: "Pendente", 
          detalhes: "Criar interface amigável de chat integrada ao aplicativo, acessível de todas as telas via botão flutuante."
        },
        { 
          id: "task-3-3", 
          nome: "Sistemas de Lembretes Contextuais", 
          status: "Pendente", 
          detalhes: "Implementar sistema de notificações inteligentes baseadas nos hábitos e necessidades do usuário."
        },
        { 
          id: "task-3-4", 
          nome: "Base de Conhecimento Nutricional", 
          status: "Pendente", 
          detalhes: "Compilar e estruturar informações sobre nutrição, treino e cutting para alimentar o assistente virtual."
        },
        { 
          id: "task-3-5", 
          nome: "Integração com Plano Personalizado", 
          status: "Pendente", 
          detalhes: "Permitir que o assistente acesse e referencie o plano nutricional do usuário durante as conversas."
        }
      ],
      tecnologias: ["Python", "NLP (spaCy/NLTK)", "GPT API", "WebSockets", "Firebase"]
    },
    {
      id: 4,
      titulo: "Fase 3: Análise de Imagem",
      periodo: "Mês 5-6",
      descricao: "Tecnologia de visão computacional para análise de progresso físico",
      tarefas: [
        { 
          id: "task-4-1", 
          nome: "Algoritmo de Análise Corporal", 
          status: "Pendente", 
          detalhes: "Desenvolver modelo de IA capaz de analisar fotos para identificar alterações na composição corporal." 
        },
        { 
          id: "task-4-2", 
          nome: "Estimativa de % de Gordura", 
          status: "Pendente", 
          detalhes: "Implementar funcionalidade para estimar percentual de gordura corporal a partir de imagens padronizadas."
        },
        { 
          id: "task-4-3", 
          nome: "Detecção Automática de Mudanças", 
          status: "Pendente", 
          detalhes: "Sistema para identificar e destacar automaticamente alterações entre fotos de diferentes períodos."
        },
        { 
          id: "task-4-4", 
          nome: "Interface de Visualização Avançada", 
          status: "Pendente", 
          detalhes: "Desenvolver ferramentas visuais para apresentar as análises de imagem de forma clara e motivadora."
        },
        { 
          id: "task-4-5", 
          nome: "Recursos de Privacidade", 
          status: "Pendente", 
          detalhes: "Implementar medidas robustas de segurança e privacidade para armazenamento e processamento de imagens."
        }
      ],
      tecnologias: ["Python", "OpenCV", "TensorFlow", "PyTorch", "Cloud Storage Seguro"]
    },
    {
      id: 5,
      titulo: "Fase 4: Previsão e Otimização",
      periodo: "Mês 7-8",
      descricao: "Sistema preditivo para antecipar resultados e otimizar estratégias",
      tarefas: [
        { 
          id: "task-5-1", 
          nome: "Modelo Preditivo de Resultados", 
          status: "Pendente", 
          detalhes: "Desenvolver algoritmo de machine learning para prever resultados futuros com base nos dados atuais e históricos." 
        },
        { 
          id: "task-5-2", 
          nome: "Detecção Preventiva de Plateaus", 
          status: "Pendente", 
          detalhes: "Implementar sistema que identifica sinais precoces de estagnação no progresso de perda de peso."
        },
        { 
          id: "task-5-3", 
          nome: "Recomendações Adaptativas", 
          status: "Pendente", 
          detalhes: "Criar motor de recomendações que sugere ajustes proativos no plano para maximizar resultados."
        },
        { 
          id: "task-5-4", 
          nome: "Visualização de Projeções", 
          status: "Pendente", 
          detalhes: "Desenvolver interface para mostrar projeções de resultados sob diferentes cenários e estratégias."
        },
        { 
          id: "task-5-5", 
          nome: "Sistema de Gamificação", 
          status: "Pendente", 
          detalhes: "Implementar elementos de gamificação baseados nas predições para aumentar engajamento e motivação."
        }
      ],
      tecnologias: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "D3.js"]
    },
    {
      id: 6,
      titulo: "Fase 5: Integração e Refinamento",
      periodo: "Mês 9-10",
      descricao: "Unificação das funcionalidades e otimização da experiência do usuário",
      tarefas: [
        { 
          id: "task-6-1", 
          nome: "Dashboard Unificado", 
          status: "Pendente", 
          detalhes: "Criar interface centralizada que integra todas as funcionalidades de IA de forma coesa e intuitiva." 
        },
        { 
          id: "task-6-2", 
          nome: "Testes de Usabilidade", 
          status: "Pendente", 
          detalhes: "Conduzir testes extensivos com usuários reais para identificar pontos de melhoria na experiência."
        },
        { 
          id: "task-6-3", 
          nome: "Otimização de Performance", 
          status: "Pendente", 
          detalhes: "Refinar algoritmos e interfaces para garantir velocidade e responsividade em todos os dispositivos."
        },
        { 
          id: "task-6-4", 
          nome: "Versão PWA Avançada", 
          status: "Pendente", 
          detalhes: "Implementar recursos avançados de Progressive Web App para experiência similar a aplicativo nativo."
        },
        { 
          id: "task-6-5", 
          nome: "Sistema de Feedback Contínuo", 
          status: "Pendente", 
          detalhes: "Implementar mecanismos de coleta de feedback para evolução contínua do aplicativo baseada em dados reais."
        }
      ],
      tecnologias: ["React", "Python", "Testes A/B", "Analytics", "PWA"]
    }
  ];

  return (
    React.createElement('div', { className: 'roadmap-container p-6 bg-gray-900 rounded-lg' },
      React.createElement('div', { className: 'mb-8' },
        React.createElement('h1', { className: 'text-3xl font-bold text-orange-500 mb-2' }, 'Secando Bucho 2.0'),
        React.createElement('p', { className: 'text-gray-400' }, 'Roadmap de Implementação com Funcionalidades de IA')
      ),

      // Navegação entre fases
      React.createElement('div', { className: 'flex overflow-x-auto pb-4 mb-6 gap-2' },
        fases.map(fase => 
          React.createElement('button', {
            key: fase.id,
            onClick: () => setFaseAtiva(fase.id),
            className: `px-4 py-2 rounded-lg whitespace-nowrap font-medium text-sm transition-all
              ${faseAtiva === fase.id 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`
          }, fase.titulo)
        )
      ),

      // Visualização da linha do tempo
      React.createElement('div', { className: 'relative mb-12 overflow-hidden' },
        React.createElement('div', { className: 'h-2 bg-gray-800 rounded-full w-full' }),
        React.createElement('div', { 
          className: 'absolute top-0 left-0 h-2 bg-orange-500 rounded-full',
          style: { width: `${(faseAtiva / fases.length) * 100}%` }
        }),
        
        React.createElement('div', { className: 'flex justify-between mt-2' },
          fases.map(fase => 
            React.createElement('div', { 
              key: fase.id, 
              className: 'flex flex-col items-center',
              style: { width: `${100 / fases.length}%` }
            },
              React.createElement('div', { 
                className: `w-4 h-4 rounded-full ${fase.id <= faseAtiva ? 'bg-orange-500' : 'bg-gray-700'}`,
                style: { marginTop: '-10px' }
              }),
              React.createElement('span', { 
                className: `text-xs mt-2 ${fase.id <= faseAtiva ? 'text-orange-500' : 'text-gray-500'}`
              }, fase.periodo)
            )
          )
        )
      ),

      // Detalhes da fase atual
      fases.filter(fase => fase.id === faseAtiva).map(fase => 
        React.createElement('div', { 
          key: fase.id, 
          className: 'bg-gray-800 rounded-lg p-6 mb-8 transition-all'
        },
          React.createElement('div', { className: 'flex justify-between items-start mb-4' },
            React.createElement('div', {},
              React.createElement('h2', { className: 'text-2xl font-bold text-orange-400' }, fase.titulo),
              React.createElement('p', { className: 'text-gray-400' }, fase.periodo)
            ),
            React.createElement('span', { className: 'bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm' },
              fase.id === 1 ? 'Completo' : 'Planejado'
            )
          ),
          
          React.createElement('p', { className: 'text-gray-300 mb-6' }, fase.descricao),
          
          React.createElement('h3', { className: 'text-lg font-medium text-gray-200 mb-4' }, 'Principais Tarefas'),
          React.createElement('div', { className: 'space-y-3 mb-6' },
            fase.tarefas.map(tarefa => 
              React.createElement('div', { key: tarefa.id, className: 'bg-gray-700 rounded-lg p-4' },
                React.createElement('div', { className: 'flex justify-between items-center' },
                  React.createElement('div', { className: 'flex items-center' },
                    React.createElement('div', { 
                      className: `w-3 h-3 rounded-full mr-3 
                        ${tarefa.status === 'Completo' ? 'bg-green-500' : 'bg-yellow-500'}`
                    }),
                    React.createElement('h4', { className: 'font-medium text-gray-100' }, tarefa.nome)
                  ),
                  React.createElement('button', { 
                    onClick: () => toggleExpandir(tarefa.id),
                    className: 'text-gray-400 hover:text-gray-200'
                  }, expandido[tarefa.id] ? '−' : '+')
                ),
                
                expandido[tarefa.id] && 
                React.createElement('div', { 
                  className: 'mt-3 pl-6 text-gray-300 text-sm border-l-2 border-gray-600'
                }, tarefa.detalhes)
              )
            )
          ),
          
          React.createElement('h3', { className: 'text-lg font-medium text-gray-200 mb-4' }, 'Tecnologias'),
          React.createElement('div', { className: 'flex flex-wrap gap-2' },
            fase.tecnologias.map((tech, index) => 
              React.createElement('span', { 
                key: index, 
                className: 'bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm'
              }, tech)
            )
          )
        )
      ),

      // Visão geral do projeto
      React.createElement('div', { className: 'bg-gray-800 rounded-lg p-6' },
        React.createElement('h3', { className: 'text-xl font-bold text-orange-400 mb-4' }, 'Visão Geral do Projeto'),
        
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
          React.createElement('div', { className: 'bg-gray-700 p-4 rounded-lg' },
            React.createElement('h4', { className: 'font-medium mb-2 text-gray-100' }, 'Tecnologias Frontend'),
            React.createElement('ul', { className: 'text-gray-300 text-sm space-y-1' },
              React.createElement('li', {}, '• React (interface atual)'),
              React.createElement('li', {}, '• Tailwind CSS (estilos modernos)'),
              React.createElement('li', {}, '• WebSockets (comunicação com chatbot)'),
              React.createElement('li', {}, '• PWA (experiência nativa)'),
              React.createElement('li', {}, '• D3.js (visualizações avançadas)')
            )
          ),
          
          React.createElement('div', { className: 'bg-gray-700 p-4 rounded-lg' },
            React.createElement('h4', { className: 'font-medium mb-2 text-gray-100' }, 'Tecnologias Backend'),
            React.createElement('ul', { className: 'text-gray-300 text-sm space-y-1' },
              React.createElement('li', {}, '• Python (lógica principal)'),
              React.createElement('li', {}, '• Flask/FastAPI (API RESTful)'),
              React.createElement('li', {}, '• MongoDB (armazenamento)'),
              React.createElement('li', {}, '• TensorFlow/PyTorch (modelos IA)'),
              React.createElement('li', {}, '• Firebase (autenticação/temps)')
            )
          ),
          
          React.createElement('div', { className: 'bg-gray-700 p-4 rounded-lg' },
            React.createElement('h4', { className: 'font-medium mb-2 text-gray-100' }, 'Funcionalidades IA'),
            React.createElement('ul', { className: 'text-gray-300 text-sm space-y-1' },
              React.createElement('li', {}, '• Geração de planos nutricionais'),
              React.createElement('li', {}, '• Chatbot com NLP especializado'),
              React.createElement('li', {}, '• Análise de imagens por CV'),
              React.createElement('li', {}, '• Previsão de resultados futuros'),
              React.createElement('li', {}, '• Recomendações adaptativas')
            )
          )
        ),
        
        React.createElement('div', { className: 'mt-6 bg-orange-500 bg-opacity-20 border border-orange-500 p-4 rounded-lg' },
          React.createElement('h4', { className: 'font-medium text-orange-400 mb-2' }, 'Próximos Passos'),
          React.createElement('p', { className: 'text-gray-300 text-sm' },
            'Para iniciar a implementação, recomendamos montar a infraestrutura backend em Python e desenvolver a API para os planos nutricionais personalizados, que servirá como base para todas as outras funcionalidades de IA.'
          )
        )
      )
    )
  );
}

// Renderização do componente
document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  ReactDOM.render(React.createElement(RoadmapInterativo), root);
});
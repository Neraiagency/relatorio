// Componente Header
const Header = () => {
  return (
    <header>
      <h1>Relatório do Projeto: Julius AI</h1>
      <p>O Economizador de Centavos - Desafio de Clones IA</p>
    </header>
  );
};

// Componente ReportMeta
const ReportMeta = () => {
  const metaItems = [
    { label: "Persona Base", value: "Julius Rock" },
    { label: "Categoria", value: "Educação Financeira" },
    { label: "Tecnologias", value: "TypeScript, React, Supabase" },
    { label: "Data de Submissão", value: "16/03/2025" }
  ];

  return (
    <div className="report-meta">
      {metaItems.map((item, index) => (
        <div className="meta-item" key={index}>
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

// Componente Card
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

// Componente Section
const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

// Componente OverviewSection
const OverviewSection = () => {
  return (
    <Section title="1. Visão Geral do Projeto">
      <Card>
        <p>O Julius AI é um clone IA inspirado na personalidade do personagem Julius Rock da série "Todo Mundo Odeia o Chris". O agente foi desenvolvido para transformar a relação das pessoas com o dinheiro, utilizando a mentalidade única de um pai de família dos anos 80 que trabalha em dois empregos e conta cada centavo.</p>
        <p>O diferencial principal do clone é a capacidade de converter cada gasto em "horas trabalhadas", criando uma consciência financeira profunda e bem-humorada que transforma a percepção sobre consumo e economia.</p>
      </Card>
    </Section>
  );
};

// Componente DevelopmentSection
const DevelopmentSection = () => {
  const phases = [
    {
      title: "Fase 1: Concepção e Planejamento",
      items: [
        "Análise do personagem e suas características marcantes",
        "Definição do propósito transformador",
        "Planejamento de funcionalidades e experiência do usuário"
      ]
    },
    {
      title: "Fase 2: Desenvolvimento da Infraestrutura (Planify)",
      items: [
        "Arquitetura de frontend com React e TypeScript",
        "Estruturação de backend para processamento de dados financeiros",
        "Implementação do banco de dados com Supabase",
        "Configuração de servidor e deployment"
      ]
    },
    {
      title: "Fase 3: Construção da Inteligência do Julius",
      items: [
        "Engenharia de prompt com sistema de personalidade",
        "Criação da base de conhecimento financeira e cultural",
        "Desenvolvimento de ferramentas (tools) para análise financeira"
      ]
    },
    {
      title: "Fase 4: Integração e Otimização",
      items: [
        "Vinculação entre Planify e Super Agentes",
        "Testes de usabilidade e refinamento de respostas",
        "Otimização de performance do sistema"
      ]
    },
    {
      title: "Fase 5: Validação e Lançamento",
      items: [
        "Testes com usuários reais e coleta de feedback",
        "Documentação do sistema",
        "Preparação do vídeo demonstrativo",
        "Submissão para o Desafio de Clones IA"
      ]
    }
  ];

  return (
    <Section title="2. Processo de Desenvolvimento">
      <Card>
        {phases.map((phase, index) => (
          <React.Fragment key={index}>
            <h3>{phase.title}</h3>
            <ul>
              {phase.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </Card>
    </Section>
  );
};

// Componente FeaturesSection
const FeaturesSection = () => {
  const features = [
    { name: "Cálculo de Horas Trabalhadas", description: "Converte gastos em horas de trabalho necessárias para pagá-los" },
    { name: "Registro de Transações", description: "Sistema de anotação e categorização de gastos e ganhos" },
    { name: "Diagnóstico Financeiro", description: "Análise onde o dinheiro está sendo \"jogado fora\"" },
    { name: "Sistema de Cupons", description: "Recompensas para incentivar economias comprovadas" },
    { name: "Alternativas Econômicas", description: "Sugestões personalizadas para reduzir gastos em cada categoria" },
    { name: "Variações de Humor", description: "Sistema de personalidade com humor adaptável às situações financeiras" }
  ];

  return (
    <Section title="3. Funcionalidades Principais">
      <table>
        <thead>
          <tr>
            <th>Funcionalidade</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td>{feature.name}</td>
              <td>{feature.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

// Componente QuotesSection
const QuotesSection = () => {
  const quotes = [
    "\"Sabe quanto custa isso? Com esse dinheiro dá pra comprar arroz e feijão pra uma semana inteira!\"",
    "\"Eu trabalho em DOIS empregos e durmo apenas QUATRO horas por dia! Não tenho tempo pra jogar dinheiro fora!\"",
    "\"Isso custou QUANTO? São TRÊS HORAS do meu trabalho! Quando a Rochelle souber disso...\"",
    "\"Se não comprar nada, o DESCONTO É BEM MAIOR!\""
  ];

  return (
    <Section title="4. Frases Icônicas Implementadas">
      {quotes.map((quote, index) => (
        <div className="quote" key={index}>
          {quote}
        </div>
      ))}
    </Section>
  );
};

// Componente ChallengesSection
const ChallengesSection = () => {
  const challenges = [
    "Implementação de integrações técnicas sem experiência prévia em programação",
    "Desenvolvimento de um sistema financeiro funcional utilizando TypeScript, React e Supabase",
    "Criação de um sistema de personalidade com múltiplas variáveis de humor mantendo consistência",
    "Balanceamento entre humor autêntico e valor financeiro prático em cada interação"
  ];

  return (
    <Section title="5. Desafios Superados">
      <Card>
        <ul>
          {challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </Card>
    </Section>
  );
};

// Componente ConclusionSection
const ConclusionSection = () => {
  return (
    <Section title="6. Conclusão">
      <Card>
        <p>Este clone foi desenvolvido não apenas com o objetivo de ganhar o desafio. Era uma ideia que já tinha para uso pessoal, e o desafio foi o gatilho que eu precisava para tomar coragem e desenvolvê-lo. Nesse processo, superei meus limites, tanto com as integrações quanto com o sistema que desenvolvi utilizando TypeScript, React e o Supabase como banco de dados.</p>
        <p>Importante destacar que não sou programador e esta foi a primeira aplicação que desenvolvi, utilizando ajuda de IA para criar o código e resolver os bugs que apareceram pelo caminho. Gratidão à Academia Lendária por estimular os membros a superarem seus limites.</p>
      </Card>
    </Section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer>
      © 2025 Julius AI - Desafio de Clones IA da Academia Lendária
    </footer>
  );
};

// Componente principal da aplicação
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <ReportMeta />
      <OverviewSection />
      <DevelopmentSection />
      <FeaturesSection />
      <QuotesSection />
      <ChallengesSection />
      <ConclusionSection />
      <Footer />
    </React.Fragment>
  );
};

// Renderiza o componente App no elemento com id "root"
ReactDOM.render(<App />, document.getElementById("root"));
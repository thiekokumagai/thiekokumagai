export const perfil = {
  nome: "Wesley Thieko de Aguiar Kumagai",
  nomeCurto: "Thieko Kumagai",
  cargo: "Full Stack Developer",
  tags: ["Node.js", "React", "Angular", "Laravel", "NestJS", "Integrações", "Automação", "IA"],
  telefone: "(67) 9 9112-2210",
  whatsapp: "https://wa.me/5567991122210",
  email: "thieko.kumagai@gmail.com",
  linkedin: "https://www.linkedin.com/in/thiekokumagaidev",
  linkedinUser: "@thiekokumagaidev",
  resumo: [
    "Desenvolvedor Full Stack com mais de 10 anos de experiência em desenvolvimento web e sistemas corporativos. Atuação sólida em backend com Laravel, NestJS e integrações complexas, além de frontend moderno com React e Tailwind CSS.",
    "Experiência em projetos institucionais, sistemas educacionais, automações empresariais com n8n, integrações com gateways de pagamento, TOTVS, assinatura digital e reconhecimento facial.",
    "Forte foco em integrações, automação inteligente e soluções orientadas a negócio.",
  ],
};

export const destaques: string[] = [];

export const stats = [
  { valor: 10, sufixo: "+", label: "anos de experiência" },
  { valor: 5, sufixo: "", label: "empresas" },
  { valor: 6, sufixo: "+", label: "projetos freelancer" },
  { valor: 2015, sufixo: "", label: "Ciência da Computação" },
];

export const competencias = [
  {
    titulo: "Backend",
    itens: ["Node.js", "NestJS", "PHP", "Laravel", "Python", "Java", "C# (APIs)", "APIs REST", "Gateways de pagamento", "Integrações com IA", "Integração TOTVS", "Upload de imagens com MinIO"],
  },
  {
    titulo: "Frontend",
    itens: ["Next.js", "AngularJS", "React", "Vite", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "WordPress avançado", "Figma"],
  },
  { titulo: "Banco de dados", itens: ["MySQL", "PostgreSQL", "SQL Server"] },
  { titulo: "Mobile", itens: ["React Native", "Flutter"] },
  {
    titulo: "Automação & Integrações",
    itens: ["n8n", "Webhooks", "WhatsApp API", "Automação de fluxo de caixa", "Análise inteligente de e-mails", "Monitoramento de estoque", "Integração entre sistemas via API", "Integração com Uber Direct","Impressão em impressora Windows com React"],
  },
  {
    titulo: "Metodologias & Ferramentas",
    itens: ["Scrum", "Git", "Sistemas corporativos", "UI/UX básico", "Flat Design"],
  },
];

export const experiencias = [
  {
    empresa: "Mil Tec Tecnologia",
    cargo: "Desenvolvedor Pleno Full Stack",
    periodo: "2026",
    local: "Remoto",
    itens: [
      "Desenvolvimento e integração com APIs da SEFAZ",
      "Processamento e armazenamento de XML de NF-e",
      "Automação de consultas fiscais e DF-e",
      "Sistemas de gestão tributária e fiscal",
      "Integração com certificados digitais A1/A3",
      "Geração e validação de documentos fiscais eletrônicos",
      "Desenvolvimento e manutenção de APIs REST",
      "Desenvolvimento em Java e APIs em C#",
      "Clean Architecture, boas práticas e separação de responsabilidades",
      "Decisões técnicas, melhorias de performance e ambiente ágil (Scrum)",
    ],
  },
  {
    empresa: "Inovvati Tecnologia",
    cargo: "Desenvolvedor Pleno Full Stack",
    periodo: "2022 – 2026",
    local: "Remoto",
    itens: [
      "Sistema público de chamados para a AGETEC",
      "Totem de autoatendimento com reconhecimento facial",
      "Integrações com IA para automação de atendimento",
      "Desenvolvimento e manutenção de APIs REST",
      "Clean Architecture em novos projetos",
      "Decisões técnicas, melhorias de performance e ambiente ágil (Scrum)",
    ],
  },
  {
    empresa: "Funlec",
    cargo: "Desenvolvedor",
    periodo: "2014 – 2022",
    local: "",
    link: "https://funlec.com.br/",
    itens: [
      "Sistema financeiro interno",
      "Sistema de RH com integração ao ERP TOTVS",
      "Sistema acadêmico para gestão de alunos e professores",
      "Integração com sistemas legados e automação de processos administrativos",
      "Sistema contábil",
      "Desenvolvimento completo do site institucional em WordPress, com estilização em Tailwind CSS",
    ],
  },
  {
    empresa: "Grupo WTW",
    cargo: "Desenvolvedor Web",
    periodo: "2012 – 2014",
    local: "",
    itens: [
      "Construção de layouts em CSS",
      "Programação backend em PHP",
      "Integração com banco de dados MySQL",
      "Manutenção e evolução de sistemas web",
    ],
  },
];

export const projetos = [
  { nome: "Niko Onigiri", link: "https://nikoonigiri.com.br/", itens: ["Delivery online com catálogo, carrinho e checkout", "Integração com pagamento", "Painel administrativo", "Painel do caixa (PDV) com impressão de pedidos em impressora Windows direto do React","App/painel do motoboy com gestão de entregas", "Integração com Uber Direct para entregas",
 "Sistema completo: cliente, admin, caixa e entregador", "React + Vite + Tailwind"] },
  { nome: "Maratona de Campo Grande", link: "https://maratonadecampogrande.com.br/", itens: ["Inscrição online", "Integração com pagamento", "WordPress customizado"] },
  { nome: "Bonito 21K", link: "https://bonito21k.com.br/", itens: ["Inscrição online", "Gateway de pagamento", "Gestão de participantes"] },
  { nome: "Compensei", link: "https://compensei.com/", itens: ["Site institucional", "API de pagamento", "Cálculo de emissão de CO₂ por combustível"] },
  { nome: "Imobiliária Razuk", link: "https://imobiliariarazuk.com.br/", itens: ["Cadastro de imóveis", "Upload de fotos", "Integração com pagamento", "WordPress"] },
  { nome: "Seja Black Imóveis", link: "https://sejablack.com.br/", itens: ["Listagem de imóveis", "Integração com sistema via API", "WordPress customizado"] },
  { nome: "Pares Saúde", link: "https://www.paressaude.com.br/", itens: ["WordPress customizado", "Área interna de fichas", "Assinatura digital", "Controle de antimicrobianos"] },
];

export const automacoes = [
  "Sistemas multi-tenant (multilojas) com isolamento de dados por cliente",
  "Plataformas SaaS com painéis por perfil: admin, caixa, entregador e cliente",
  "Arquitetura escalável com integrações via API, webhooks e filas",
  "Análise automática de fluxo de caixa",
  "Relatório diário de caixa via WhatsApp",
  "Análise de importância de e-mails",
  "Priorização automática de e-mails relevantes",
  "Análise de estoque com identificação de produtos próximos do fim",
  "Alerta automático de reposição via WhatsApp",
];

export const formacao = {
  curso: "Bacharel em Ciência da Computação",
  instituicao: "Anhanguera Educacional",
  ano: "Concluído em 2015",
};

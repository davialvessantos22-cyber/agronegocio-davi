// ============================================================
//  SustentAgro — script.js
//  Quiz educativo sobre sustentabilidade e agricultura
// ============================================================

'use strict';

// ---------- BASE DE PERGUNTAS ----------
const perguntas = [
  {
    texto: 'Qual técnica de irrigação é considerada a mais eficiente no uso da água em lavouras?',
    opcoes: [
      'Irrigação por aspersão convencional',
      'Inundação dos canteiros',
      'Irrigação por gotejamento',
      'Irrigação por sulco'
    ],
    correta: 2,
    explicacao: 'A irrigação por gotejamento entrega água diretamente na zona radicular da planta, reduzindo perdas por evaporação e escoamento. Pode economizar até 50% de água em relação a métodos convencionais.'
  },
  {
    texto: 'O que é "plantio direto" na agricultura?',
    opcoes: [
      'Plantar sementes sem qualquer preparo do solo, mantendo a cobertura vegetal',
      'Usar arado pesado para revolver profundamente o solo antes do plantio',
      'Plantar em terrenos inclinados sem curvas de nível',
      'Utilizar sementes modificadas geneticamente sem rotação de cultura'
    ],
    correta: 0,
    explicacao: 'O plantio direto conserva a palha e resíduos vegetais sobre o solo, evitando o revolvimento. Isso reduz a erosão, mantém a umidade, preserva a fauna do solo e sequestra carbono.'
  },
  {
    texto: 'Qual das alternativas a seguir é um exemplo de energia renovável aplicável à agricultura?',
    opcoes: [
      'Gerador a diesel movido por combustível fóssil',
      'Energia solar fotovoltaica para bombas de irrigação',
      'Queima de palha diretamente no campo',
      'Uso de turbinas a carvão mineral'
    ],
    correta: 1,
    explicacao: 'Painéis solares fotovoltaicos são amplamente utilizados no campo para bombear água, iluminar instalações e alimentar cercas elétricas. Têm baixo custo de manutenção e zero emissão de gases de efeito estufa durante a operação.'
  },
  {
    texto: 'O que caracteriza a agricultura orgânica?',
    opcoes: [
      'Uso intensivo de fertilizantes nitrogenados sintéticos',
      'Dependência exclusiva de herbicidas seletivos',
      'Evitar agroquímicos sintéticos, priorizando insumos naturais e biodiversidade',
      'Monocultura de larga escala com sementes transgênicas'
    ],
    correta: 2,
    explicacao: 'A agricultura orgânica é baseada em princípios ecológicos: sem pesticidas ou fertilizantes sintéticos, com foco em compostagem, diversidade de cultivos e controle biológico de pragas. Isso protege a saúde humana e do ecossistema.'
  },
  {
    texto: 'O que é "rotação de culturas" e por que ela é benéfica?',
    opcoes: [
      'Plantar a mesma cultura todo ano para maximizar a produção',
      'Alternar diferentes culturas no mesmo solo ao longo das safras, melhorando sua saúde',
      'Girar fisicamente a plantação em direção ao sol',
      'Substituir todos os trabalhadores a cada safra'
    ],
    correta: 1,
    explicacao: 'A rotação de culturas quebra ciclos de pragas e doenças, diversifica os nutrientes retirados e adicionados ao solo, e pode incluir leguminosas que fixam nitrogênio naturalmente, reduzindo a necessidade de fertilizantes.'
  },
  {
    texto: 'Qual prática ajuda diretamente a preservar as nascentes e a qualidade da água em propriedades rurais?',
    opcoes: [
      'Retirar toda a vegetação às margens dos rios para facilitar o acesso',
      'Manter a mata ciliar ao redor de cursos d\'água e nascentes',
      'Canalizar todos os córregos da propriedade',
      'Usar a margem dos rios para depositar resíduos orgânicos'
    ],
    correta: 1,
    explicacao: 'A mata ciliar é a vegetação que margeia rios e nascentes. Ela filtra sedimentos e agroquímicos, evita erosão nas margens, regula a temperatura da água e serve de corredor para a fauna. É protegida por lei no Brasil pelo Código Florestal.'
  },
  {
    texto: 'O que é compostagem e qual seu principal benefício agrícola?',
    opcoes: [
      'Um processo industrial para fabricar defensivos químicos',
      'A decomposição controlada de matéria orgânica que gera adubo natural rico em nutrientes',
      'Uma técnica de secagem de grãos usando sol e vento',
      'O armazenamento de sementes em câmaras frias'
    ],
    correta: 1,
    explicacao: 'A compostagem transforma restos de alimentos, palha, esterco e outros materiais orgânicos em composto rico em nutrientes e microrganismos benéficos. Melhora a estrutura do solo, aumenta a retenção de água e reduz a necessidade de fertilizantes sintéticos.'
  },
  {
    texto: 'Qual dos seguintes gases é o principal responsável pelo efeito estufa e está diretamente ligado às emissões agropecuárias?',
    opcoes: [
      'Nitrogênio (N₂)',
      'Oxigênio (O₂)',
      'Dióxido de carbono (CO₂) e metano (CH₄)',
      'Argônio (Ar)'
    ],
    correta: 2,
    explicacao: 'O CO₂ vem da queima de combustíveis fósseis e desmatamento, enquanto o CH₄ é emitido pela fermentação entérica do gado e pela decomposição de resíduos em condições anaeróbicas. A agropecuária representa cerca de 14,5% das emissões globais de gases de efeito estufa.'
  }
];

// ---------- Mensagens de resultado por desempenho ----------
const resultados = [
  {
    minPct: 0, maxPct: 37,
    emoji: '🌱',
    titulo: 'Continue aprendendo!',
    mensagem: 'Você deu o primeiro passo! Explorar os temas abaixo vai expandir muito seu conhecimento sobre sustentabilidade e agricultura. Cada semente de conhecimento faz diferença.'
  },
  {
    minPct: 38, maxPct: 62,
    emoji: '🌿',
    titulo: 'Bom começo!',
    mensagem: 'Você já tem uma base interessante sobre agricultura sustentável. Com um pouco mais de estudo nos tópicos abaixo, estará ainda mais preparado para contribuir com o campo do futuro.'
  },
  {
    minPct: 63, maxPct: 87,
    emoji: '🌳',
    titulo: 'Muito bem!',
    mensagem: 'Seu conhecimento sobre sustentabilidade agrícola é sólido. Você entende os princípios fundamentais e está no caminho certo para aplicá-los ou difundi-los.'
  },
  {
    minPct: 88, maxPct: 100,
    emoji: '🏆',
    titulo: 'Excelente! Especialista em campo!',
    mensagem: 'Parabéns! Você demonstra domínio amplo sobre práticas sustentáveis na agricultura. Continue sendo um multiplicador desse conhecimento — o planeta agradece!'
  }
];

// ---------- Estado do quiz ----------
let estadoAtual = {
  perguntaIndex: 0,
  pontuacao: 0,
  respostaDada: false,
  perguntasEmbaralhadas: []
};

// ---------- Referências ao DOM ----------
const telaIntro    = document.getElementById('quiz-intro');
const telaPergunta = document.getElementById('quiz-question');
const telaResultado = document.getElementById('quiz-result');

const btnStart    = document.getElementById('btn-start');
const btnNext     = document.getElementById('btn-next');
const btnRestart  = document.getElementById('btn-restart');

const progressBar  = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const seedsRow     = document.getElementById('seeds-row');

const questionText = document.getElementById('question-text');
const optionsList  = document.getElementById('options-list');
const feedbackBox  = document.getElementById('feedback-box');
const feedbackText = document.getElementById('feedback-text');
const explanationText = document.getElementById('explanation-text');

const resultBadge   = document.getElementById('result-badge');
const resultTitle   = document.getElementById('result-title');
const resultScore   = document.getElementById('result-score');
const resultMessage = document.getElementById('result-message');

// ---------- Funções utilitárias ----------

/** Embaralha um array (Fisher-Yates) */
function embaralhar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Mostra apenas uma tela */
function mostrarTela(tela) {
  [telaIntro, telaPergunta, telaResultado].forEach(t => t.style.display = 'none');
  tela.style.display = 'block';
}

/** Atualiza a barra de progresso e sementes */
function atualizarProgresso() {
  const total = estadoAtual.perguntasEmbaralhadas.length;
  const atual = estadoAtual.perguntaIndex;
  const pct   = (atual / total) * 100;

  progressBar.style.width = pct + '%';
  progressText.textContent = `Pergunta ${atual + 1} de ${total}`;

  // Sementes: 🌱 por responder, 🌾 por acertar
  let sementes = '';
  for (let i = 0; i < total; i++) {
    if (i < atual) {
      sementes += '🌾';
    } else {
      sementes += '🌱';
    }
  }
  seedsRow.textContent = sementes;
  seedsRow.setAttribute('aria-label', `${atual} de ${total} perguntas respondidas`);
}

// ---------- Lógica do quiz ----------

function iniciarQuiz() {
  estadoAtual = {
    perguntaIndex: 0,
    pontuacao: 0,
    respostaDada: false,
    perguntasEmbaralhadas: embaralhar(perguntas)
  };
  mostrarTela(telaPergunta);
  mostrarPergunta();
}

function mostrarPergunta() {
  const { perguntaIndex, perguntasEmbaralhadas } = estadoAtual;
  const pergunta = perguntasEmbaralhadas[perguntaIndex];

  estadoAtual.respostaDada = false;
  feedbackBox.style.display = 'none';
  feedbackBox.className = 'feedback-box';

  atualizarProgresso();

  // Texto da pergunta
  questionText.textContent = pergunta.texto;

  // Limpa opções
  optionsList.innerHTML = '';

  // Cria os botões de opção
  pergunta.opcoes.forEach((opcao, idx) => {
    const li  = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opcao;
    btn.setAttribute('aria-label', `Opção ${idx + 1}: ${opcao}`);
    btn.addEventListener('click', () => responder(idx));
    li.appendChild(btn);
    optionsList.appendChild(li);
  });
}

function responder(indexEscolhido) {
  if (estadoAtual.respostaDada) return;
  estadoAtual.respostaDada = true;

  const pergunta = estadoAtual.perguntasEmbaralhadas[estadoAtual.perguntaIndex];
  const acertou  = indexEscolhido === pergunta.correta;

  if (acertou) estadoAtual.pontuacao++;

  // Marca as opções visualmente
  const botoes = optionsList.querySelectorAll('.option-btn');
  botoes.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === pergunta.correta) {
      btn.classList.add('correct');
    } else if (idx === indexEscolhido && !acertou) {
      btn.classList.add('incorrect');
    }
  });

  // Feedback
  feedbackText.textContent = acertou
    ? '✅ Resposta correta!'
    : `❌ Resposta incorreta. A correta era: "${pergunta.opcoes[pergunta.correta]}"`;
  explanationText.textContent = pergunta.explicacao;

  feedbackBox.className = 'feedback-box ' + (acertou ? 'acerto' : 'erro');
  feedbackBox.style.display = 'block';

  // Scroll suave até o feedback em telas menores
  feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Último item: muda o texto do botão
  const isUltima = estadoAtual.perguntaIndex === estadoAtual.perguntasEmbaralhadas.length - 1;
  btnNext.textContent = isUltima ? 'Ver resultado 🌾' : 'Próxima pergunta →';
}

function proximaPergunta() {
  estadoAtual.perguntaIndex++;
  if (estadoAtual.perguntaIndex < estadoAtual.perguntasEmbaralhadas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const total = estadoAtual.perguntasEmbaralhadas.length;
  const pontos = estadoAtual.pontuacao;
  const pct = Math.round((pontos / total) * 100);

  // Atualiza barra de progresso para 100%
  progressBar.style.width = '100%';

  const res = resultados.find(r => pct >= r.minPct && pct <= r.maxPct)
              || resultados[resultados.length - 1];

  resultBadge.textContent   = res.emoji;
  resultTitle.textContent   = res.titulo;
  resultScore.textContent   = `Você acertou ${pontos} de ${total} perguntas (${pct}%)`;
  resultMessage.textContent = res.mensagem;

  mostrarTela(telaResultado);

  // Scroll para o resultado
  telaResultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- Event listeners ----------
btnStart.addEventListener('click', () => {
  iniciarQuiz();
  telaPergunta.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

btnNext.addEventListener('click', proximaPergunta);

btnRestart.addEventListener('click', () => {
  iniciarQuiz();
  telaPergunta.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Suporte a tecla Enter/Espaço para todos os botões de opção (já nativos com <button>)
// Suporte extra: tecla 1–4 para selecionar opção
document.addEventListener('keydown', (e) => {
  if (!['1','2','3','4'].includes(e.key)) return;
  if (estadoAtual.respostaDada) return;
  const botoes = optionsList.querySelectorAll('.option-btn:not(:disabled)');
  const idx = parseInt(e.key) - 1;
  if (botoes[idx]) botoes[idx].click();
});

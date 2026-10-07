const searchIndex = [
  { title: 'Nossa Escola', desc: 'Estrutura, missão, visão e valores', icon: '🏫', page: 'comunidade.html#nossa-escola', keywords: 'escola querubina estrutura missão visão valores fachada' },
  { title: 'Cursos e Modalidades', desc: 'Ensino Fundamental, Médio, Técnico em Informática, AEE e EJA', icon: '🎓', page: 'academico.html#modalidades', keywords: 'curso modalidades tecnico informática tecnologia aee eja' },
  { title: 'Galeria da Escola', desc: 'Biblioteca, laboratório de informática e pátio', icon: '📷', page: 'comunidade.html#galeria', keywords: 'galeria fotos imagens biblioteca laboratorio pátio' },
  { title: 'Eventos da Escola', desc: 'Jogos Escolares, Feira de Ciências e São João', icon: '🎉', page: 'comunicacao.html#noticias', keywords: 'eventos jogos feira ciências sao joao festa esporte cultura' },
  { title: 'Horários das Aulas', desc: 'Horários matutino e vespertino de agosto a dezembro', icon: '⏰', page: 'academico.html#horarios', keywords: 'aula horário horarios semana turno manhã tarde matutino vespertino pdf' },
  { title: 'Calendário Escolar', desc: 'Datas importantes do ano letivo', icon: '📅', page: 'index.html', keywords: 'calendário data feriado recesso' },
  { title: 'Comunicados', desc: 'Avisos e comunicados oficiais', icon: '📢', page: 'index.html', keywords: 'aviso comunicado notícia' },
  { title: 'Área do Aluno', desc: 'Acesse sua conta pessoal', icon: '👤', page: 'index.html', keywords: 'aluno login senha conta' },
  { title: 'Matemática', desc: 'Materiais e atividades de matemática', icon: '🔢', page: 'academico.html', keywords: 'matemática cálculo álgebra geometria' },
  { title: 'Língua Portuguesa', desc: 'Literatura e gramática', icon: '📖', page: 'academico.html', keywords: 'português literatura gramática redação' },
  { title: 'Ciências', desc: 'Biologia, química e física', icon: '🔬', page: 'academico.html', keywords: 'ciências biologia química física' },
  { title: 'História', desc: 'História geral e do Brasil', icon: '🏛️', page: 'academico.html', keywords: 'história brasil geral' },
  { title: 'Geografia', desc: 'Geografia política e física', icon: '🌍', page: 'academico.html', keywords: 'geografia mapa política' },
  { title: 'Inglês', desc: 'Idioma estrangeiro moderno', icon: '🌐', page: 'academico.html', keywords: 'inglês idioma língua estrangeira' },
  { title: 'Educação Física', desc: 'Atividades esportivas', icon: '⚽', page: 'academico.html', keywords: 'educação física esporte' },
  { title: 'Artes', desc: 'Cultura e expressão artística', icon: '🎨', page: 'academico.html', keywords: 'artes cultura desenho' },
  { title: 'Cronograma de Avaliações', desc: 'Datas das provas e trabalhos', icon: '📝', page: 'academico.html', keywords: 'avaliação prova teste data' },
  { title: 'Projetos Escolares', desc: 'Feiras de ciências e projetos', icon: '🚀', page: 'academico.html', keywords: 'projeto feira ciência' },
  { title: 'Declaração de Matrícula', desc: 'Solicite sua declaração', icon: '📄', page: 'servicos.html', keywords: 'declaração documento matrícula' },
  { title: 'Histórico Escolar', desc: 'Solicite seu histórico', icon: '📋', page: 'servicos.html', keywords: 'histórico boletim documento' },
  { title: 'Consulta de Notas', desc: 'Verifique suas notas', icon: '📊', page: 'servicos.html', keywords: 'nota boletim frequência' },
  { title: 'Monitoria', desc: 'Inscreva-se em monitorias', icon: '👨‍🏫', page: 'servicos.html', keywords: 'monitoria ajuda aula particular' },
  { title: 'Atendimento Pedagógico', desc: 'Agende horário com pedagogo', icon: '👩‍🏫', page: 'servicos.html', keywords: 'agendamento pedagogo pedagogia' },
  { title: 'Mural de Avisos', desc: 'Avisos importantes da escola', icon: '📌', page: 'comunicacao.html', keywords: 'aviso mural mural comunicado' },
  { title: 'Dúvidas e Sugestões', desc: 'Envie sua mensagem para direção', icon: '💬', page: 'comunicacao.html', keywords: 'dúvida sugestão contato' },
  { title: 'Catálogo de Livros', desc: 'Livros digitais disponíveis', icon: '📚', page: 'biblioteca.html', keywords: 'livro biblioteca catálogo digital' },
  { title: 'Plataformas de Leitura', desc: 'Links para leitura online', icon: '📱', page: 'biblioteca.html', keywords: 'leitura plataforma livro online' },
  { title: 'Espaço dos Pais', desc: 'Informações para responsáveis', icon: '👨‍👩‍👧', page: 'comunidade.html', keywords: 'pais responsável família' },
  { title: 'Transparência Escolar', desc: 'Documentos e atas de reuniões', icon: '🔍', page: 'comunidade.html', keywords: 'transparência ata reunião documento' },
  { title: 'Parcerias', desc: 'Projetos sociais e parcerias', icon: '🤝', page: 'comunidade.html', keywords: 'parceria projeto social' },
  { title: 'Contato', desc: 'Fale com a escola', icon: '📞', page: 'contato.html', keywords: 'telefone e-mail endereço contato' }
];

const a11y = {
  init() {
    const highContrastBtn = document.getElementById('highContrastBtn');
    const largeFontBtn = document.getElementById('largeFontBtn');
    const savedHC = localStorage.getItem('qc_highcontrast') === 'true';
    const savedLF = localStorage.getItem('qc_largefont') === 'true';
    if (savedHC) document.body.classList.add('high-contrast');
    if (savedLF) document.body.classList.add('large-font');
    if (highContrastBtn) {
      highContrastBtn.classList.toggle('active', savedHC);
      highContrastBtn.addEventListener('click', () => this.toggleHighContrast());
    }
    if (largeFontBtn) {
      largeFontBtn.classList.toggle('active', savedLF);
      largeFontBtn.addEventListener('click', () => this.toggleLargeFont());
    }
  },
  toggleHighContrast() {
    const active = document.body.classList.toggle('high-contrast');
    localStorage.setItem('qc_highcontrast', active);
    document.getElementById('highContrastBtn').classList.toggle('active', active);
  },
  toggleLargeFont() {
    const active = document.body.classList.toggle('large-font');
    localStorage.setItem('qc_largefont', active);
    document.getElementById('largeFontBtn').classList.toggle('active', active);
  }
};

const search = {
  init() {
    const box = document.getElementById('searchBox');
    const suggestions = document.getElementById('searchSuggestions');
    if (!box) return;
    box.addEventListener('input', (e) => this.handleInput(e.target.value));
    box.addEventListener('focus', () => {
      if (box.value) this.handleInput(box.value);
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        suggestions?.classList.remove('active');
      }
    });
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const first = suggestions.querySelector('.search-suggestion-item');
        if (first) first.click();
      }
    });
  },
  handleInput(query) {
    const suggestions = document.getElementById('searchSuggestions');
    if (!suggestions) return;
    const q = query.trim().toLowerCase();
    if (q) {
      const results = searchIndex.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
      ).slice(0, 6);
      this.render(results);
    } else {
      suggestions.classList.remove('active');
    }
  },
  render(results) {
    const suggestions = document.getElementById('searchSuggestions');
    if (!suggestions) return;
    if (results.length === 0) {
      suggestions.innerHTML = `<div class="search-suggestion-item" style="color:var(--text-muted);cursor:default;">
        <span>🔍</span> Nenhum resultado encontrado
      </div>`;
    } else {
      suggestions.innerHTML = results.map(r => `
        <div class="search-suggestion-item" onclick="window.location.href='${r.page}'">
          <span>${r.icon}</span>
          <div>
            <div style="font-weight:600;color:var(--text);">${r.title}</div>
            <div style="font-size:0.8rem;color:var(--text-muted);">${r.desc}</div>
          </div>
        </div>
      `).join('');
    }
    suggestions.classList.add('active');
  }
};

const mobileNav = {
  init() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.main-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      btn.innerHTML = nav.classList.contains('open') ? '✕' : '☰';
    });
  }
};

const tabs = {
  init() {
    document.querySelectorAll('[data-tab-group]').forEach(group => {
      const groupId = group.dataset.tabGroup;
      const tabs = group.querySelectorAll('[data-tab]');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => this.activate(groupId, tab.dataset.tab));
      });
    });
  },
  activate(groupId, tabId) {
    document.querySelectorAll(`[data-tab-group="${groupId}"] [data-tab]`).forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tabId);
    });
    document.querySelectorAll(`[data-tab-content-group="${groupId}"] [data-tab-content]`).forEach(c => {
      c.classList.toggle('hidden', c.dataset.tabContent !== tabId);
    });
  }
};

const forms = {
  init() {
    document.querySelectorAll('form[data-simulate]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit(form);
      });
    });
  },
  handleSubmit(form) {
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn?.innerHTML || 'Enviar';
    const msgDiv = document.createElement('div');
    msgDiv.className = 'alert-box alert-success fade-in';
    msgDiv.style.cssText = 'margin-top:1rem;';
    msgDiv.innerHTML = `
      <span class="alert-icon">✅</span>
      <div class="alert-content">
        <p><strong>Solicitação enviada com sucesso!</strong></p>
        <p>Recebemos sua solicitação. Entraremos em contato em breve através do e-mail ou telefone informados.</p>
      </div>
    `;
    form.appendChild(msgDiv);
    if (btn) {
      btn.innerHTML = '✓ Enviado';
      btn.disabled = true;
      btn.style.opacity = '0.7';
      setTimeout(() => {
        form.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
        msgDiv.remove();
      }, 4000);
    }
  }
};

const gradeSimulator = {
  init() {
    const consultarBtn = document.getElementById('consultarNotasBtn');
    if (!consultarBtn) return;
    consultarBtn.addEventListener('click', () => {
      const ra = document.getElementById('raInput')?.value || '';
      const container = document.getElementById('gradeResult');
      if (!container) return;
      if (!ra) {
        container.innerHTML = `
          <div class="alert-box alert-warning fade-in">
            <span class="alert-icon">⚠️</span>
            <div class="alert-content">
              <p>Por favor, digite seu RA (Registro de Aluno) para consultar as notas.</p>
            </div>
          </div>`;
        return;
      }
      container.innerHTML = `
        <div class="schedule-table fade-in">
          <div class="table-container">
            <table>
              <thead>
              <tr><th>Disciplina</th><th>1º Bim</th><th>2º Bim</th><th>3º Bim</th><th>4º Bim</th><th>Média</th><th>Frequência</th><th>Situação</th></tr>
            </thead>
            <tbody>
              <tr><td>Língua Portuguesa</td><td>7.5</td><td>8.0</td><td>7.8</td><td>8.5</td><td><strong>8.0</strong></td><td>95%</td><td><span class="badge badge-success">Aprovado</span></td></tr>
              <tr><td>Matemática</td><td>6.5</td><td>7.0</td><td>7.5</td><td>8.0</td><td><strong>7.3</strong></td><td>92%</td><td><span class="badge badge-success">Aprovado</span></td></tr>
              <tr><td>Ciências</td><td>8.0</td><td>8.5</td><td>7.8</td><td>9.0</td><td><strong>8.3</strong></td><td>98%</td><td><span class="badge badge-success">Aprovado</span></td></tr>
              <tr><td>História</td><td>5.5</td><td>6.0</td><td>5.8</td><td>6.5</td><td><strong>6.0</strong></td><td>88%</td><td><span class="badge badge-warning">Recuperação</span></td></tr>
              <tr><td>Geografia</td><td>7.0</td><td>7.5</td><td>8.0</td><td>8.2</td><td><strong>7.7</strong></td><td>94%</td><td><span class="badge badge-success">Aprovado</span></td></tr>
              <tr><td>Inglês</td><td>8.5</td><td>9.0</td><td>8.8</td><td>9.2</td><td><strong>8.9</strong></td><td>99%</td><td><span class="badge badge-success">Aprovado</span></td></tr>
              <tr><td>Educação Física</td><td>9.0</td><td>9.0</td><td>9.5</td><td>9.5</td><td><strong>9.3</strong></td><td>100%</td><td><span class="badge badge-success">Aprovado</span></td></tr>
            </tbody>
            </table>
          </div>
        </div>
        <div class="alert-box alert-info fade-in" style="margin-top:1rem;">
          <span class="alert-icon">ℹ️</span>
          <div class="alert-content">
            <p><strong>RA consultado:</strong> ${ra} | <strong>Situação Geral:</strong> <span class="badge badge-warning">Recuperação em História</span></p>
            <p style="margin-top:0.3rem;">Avaliação de recuperação: 15/09/2026 às 14h. Procure a coordenação para mais informações.</p>
          </div>
        </div>`;
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  a11y.init();
  search.init();
  mobileNav.init();
  tabs.init();
  forms.init();
  gradeSimulator.init();
});

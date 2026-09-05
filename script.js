// ---------- Datos de respaldo ----------
// Si el archivo se abre directamente con doble clic (file://), algunos
// navegadores bloquean la carga de contenido.json por seguridad.
// En ese caso se usa esta copia local para que el sitio funcione igual.
const DATOS_RESPALDO = null; // se completa más abajo tras el primer intento fallido

const EJEMPLO_CODIGO = `<h1 style="color:#37503b; font-family: sans-serif;">
  ¡Hola, Biblioteca del Maule!
</h1>
<p>Cambia este texto o el color de arriba y mira la vista previa.</p>
<button onclick="this.textContent='¡Le hiciste clic!'">
  Haz clic aquí
</button>`;

// ---------- Pestañas ----------
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('is-active', t === tab));
      document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.toggle('is-active', panel.id === `panel-${target}`);
      });
    });
  });
}

// ---------- Render de contenido a partir del JSON ----------
function renderTaller(data) {
  const { taller, sesiones, checklistPreparacion, recursos } = data;

  document.getElementById('tituloTaller').textContent = taller.titulo;
  document.title = `${taller.titulo} · Taller Biblioteca Pública del Maule`;
  document.getElementById('subtituloTaller').textContent = taller.subtitulo;
  document.getElementById('objetivoGeneral').textContent = taller.objetivoGeneral;
  document.getElementById('dirigidoA').textContent = taller.dirigidoA;

  const facts = document.getElementById('heroFacts');
  facts.innerHTML = '';
  const factPairs = [
    ['Duración', taller.duracionTotal],
    ['Modalidad', taller.modalidad],
    ['Cupos', taller.cupos]
  ];
  factPairs.forEach(([label, value]) => {
    const div = document.createElement('div');
    div.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    facts.appendChild(div);
  });

  const reqList = document.getElementById('requisitos');
  reqList.innerHTML = '';
  taller.requisitos.forEach(r => {
    const li = document.createElement('li');
    li.textContent = r;
    reqList.appendChild(li);
  });

  const sessionsList = document.getElementById('sessionsList');
  sessionsList.innerHTML = '';
  sesiones.forEach(s => {
    const el = document.createElement('article');
    el.className = 'session';
    el.innerHTML = `
      <div class="session-number">${String(s.numero).padStart(2, '0')}</div>
      <div>
        <span class="duration">${s.duracion}</span>
        <h3>${s.titulo}</h3>
        <p>${s.objetivo}</p>
        <ul>${s.temas.map(t => `<li>${t}</li>`).join('')}</ul>
        <div class="activity"><strong>Actividad práctica:</strong> ${s.actividad}</div>
      </div>
    `;
    sessionsList.appendChild(el);
  });

  renderChecklist(checklistPreparacion);

  const resourcesList = document.getElementById('resourcesList');
  resourcesList.innerHTML = '';
  recursos.forEach(r => {
    let domain = '';
    try { domain = new URL(r.url).hostname.replace('www.', ''); } catch (e) { domain = ''; }
    const el = document.createElement('div');
    el.className = 'resource';
    el.innerHTML = `
      <div>
        <a href="${r.url}" target="_blank" rel="noopener">${r.titulo}</a>
        <p>${r.descripcion}</p>
      </div>
      <span class="resource-domain">${domain}</span>
    `;
    resourcesList.appendChild(el);
  });
}

// ---------- Checklist interactiva ----------
function renderChecklist(items) {
  const ul = document.getElementById('checklist');
  ul.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input type="checkbox" data-id="${item.id}">
        <span>${item.texto}</span>
      </label>
    `;
    ul.appendChild(li);
  });

  ul.querySelectorAll('input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', () => {
      box.closest('li').classList.toggle('done', box.checked);
      updateProgress();
    });
  });

  updateProgress();
}

function updateProgress() {
  const boxes = document.querySelectorAll('#checklist input[type="checkbox"]');
  const done = document.querySelectorAll('#checklist input[type="checkbox"]:checked').length;
  const total = boxes.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('progressLabel').textContent = `${done} de ${total} listas`;
}

// ---------- Editor en vivo ----------
function initPlayground() {
  const input = document.getElementById('codeInput');
  const frame = document.getElementById('previewFrame');
  const resetBtn = document.getElementById('resetCode');

  function update() {
    frame.srcdoc = `
      <html><head><style>
        body { font-family: system-ui, sans-serif; padding: 16px; color: #26231b; }
      </style></head>
      <body>${input.value}</body></html>
    `;
  }

  input.value = EJEMPLO_CODIGO;
  update();
  input.addEventListener('input', update);
  resetBtn.addEventListener('click', () => {
    input.value = EJEMPLO_CODIGO;
    update();
  });
}

// ---------- Arranque ----------
async function cargarDatos() {
  try {
    const res = await fetch('contenido.json');
    if (!res.ok) throw new Error('No se pudo leer contenido.json');
    return await res.json();
  } catch (err) {
    console.warn('No se pudo cargar contenido.json por fetch (¿archivo abierto con doble clic?). Usando datos incorporados.', err);
    return window.__CONTENIDO_RESPALDO__ || null;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  initTabs();
  initPlayground();
  const data = await cargarDatos();
  if (data) {
    renderTaller(data);
  } else {
    document.getElementById('subtituloTaller').textContent =
      'No se pudo cargar contenido.json. Abre este sitio con un servidor local (por ejemplo Live Server) en vez de hacer doble clic sobre el archivo.';
  }
});

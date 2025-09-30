const CONFIG = {
  whatsapp: {
    // Reemplazar por tu número en formato internacional, sin '+' ni '00'
    number: '5491123456789',
    message: 'Hola, quiero info del Master de Actualización en Calidad Comercial de Cereales.'
  },
  pricing: {
    currency: 'USD',
    earlyBird: 490,
    standard: 690
  },
  cohort: {
    // Persistimos 72h por usuario para evitar sensación arbitraria
    earlyBirdHours: 72,
    localStorageKey: 'masterDeadline'
  }
};

function buildWhatsAppLink() {
  const { number, message } = CONFIG.whatsapp;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return url;
}

function hydrateWhatsAppCTAs() {
  const href = buildWhatsAppLink();
  document.querySelectorAll('.js-wa').forEach((el) => {
    el.setAttribute('href', href);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
}

function formatPrice(value) {
  try {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: CONFIG.pricing.currency }).format(value);
  } catch {
    return `${CONFIG.pricing.currency} ${value}`;
  }
}

function setPrices() {
  const early = formatPrice(CONFIG.pricing.earlyBird);
  const std = formatPrice(CONFIG.pricing.standard);
  const ids = ['priceEarly', 'priceEarly2', 'priceStd', 'priceStd2'];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const value = id.toLowerCase().includes('early') ? early : std;
    el.textContent = value;
  });
}

function getOrInitDeadline() {
  const key = CONFIG.cohort.localStorageKey;
  const stored = localStorage.getItem(key);
  if (stored) {
    const parsed = new Date(stored);
    if (!isNaN(parsed)) return parsed;
  }
  const deadline = new Date(Date.now() + CONFIG.cohort.earlyBirdHours * 60 * 60 * 1000);
  localStorage.setItem(key, deadline.toISOString());
  return deadline;
}

function updateCountdownLoop(deadline) {
  const el = document.getElementById('countdown');
  if (!el) return;
  function render() {
    const t = deadline.getTime() - Date.now();
    if (t <= 0) {
      el.textContent = 'Finaliza hoy';
      return;
    }
    const totalSeconds = Math.floor(t / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    parts.push(String(hours).padStart(2, '0'));
    parts.push(String(minutes).padStart(2, '0'));
    parts.push(String(seconds).padStart(2, '0'));
    el.textContent = parts.join(':');
  }
  render();
  setInterval(render, 1000);
}

async function loadProgramData() {
  try {
    const res = await fetch('program.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (e) {
    // Fallback embebido si se abre como file:// o hay CORS
    return {
      cohort: 'Próxima cohorte',
      totalHours: 20,
      modules: [
        {
          title: 'Normas y calidad por destino',
          durationHours: 2,
          topics: [
            'Actualización tolerancias y mermas',
            'Contratos, INCOTERMS y arbitrajes',
            'Diferencias por mercado interno vs. exportación'
          ]
        },
        {
          title: 'Laboratorio y muestreo avanzado',
          durationHours: 2,
          topics: [
            'Muestreo representativo y sesgos',
            'Equipos, calibraciones y trazabilidad',
            'Aseguramiento metrológico y QA/QC'
          ]
        },
        {
          title: 'Gestión de riesgo comercial',
          durationHours: 3,
          topics: [
            'Descuentos por calidad y coberturas',
            'Herramientas de cobertura básicas',
            'Políticas de calidad y pricing'
          ]
        }
      ],
      capstone: { title: 'Caso integrador', durationHours: 3 }
    };
  }
}

function renderCurriculum(program) {
  const root = document.getElementById('curriculum');
  if (!root) return;
  root.innerHTML = '';

  const heading = document.createElement('p');
  heading.className = 'lead';
  const total = (program.totalHours ?? program.modules.reduce((a, m) => a + (m.durationHours || 0), 0));
  heading.textContent = `${program.cohort} · ${total} horas estimadas`;
  root.appendChild(heading);

  program.modules.forEach((mod, idx) => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = `${idx + 1}. ${mod.title} · ${mod.durationHours || 0}h`;
    details.appendChild(summary);

    const ul = document.createElement('ul');
    (mod.topics || []).forEach((t) => {
      const li = document.createElement('li');
      li.textContent = t;
      ul.appendChild(li);
    });
    details.appendChild(ul);
    root.appendChild(details);
  });

  if (program.capstone) {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = `Capstone: ${program.capstone.title} · ${program.capstone.durationHours || 0}h`;
    details.appendChild(summary);
    const p = document.createElement('p');
    p.textContent = 'Proyecto final aplicado con feedback de un experto.';
    details.appendChild(p);
    root.appendChild(details);
  }
}

function init() {
  hydrateWhatsAppCTAs();
  setPrices();
  const deadline = getOrInitDeadline();
  updateCountdownLoop(deadline);
  loadProgramData().then(renderCurriculum);
}

document.addEventListener('DOMContentLoaded', init);


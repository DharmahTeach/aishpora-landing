/**
 * AI SHPORA (@aishpora_bot) — INTERACTIVE ENGINE
 * Features: Live Solver Simulator, Mode Switcher, Time-Saver Calculator, FAQ Accordion, Background FX
 */

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundMathParticles();
  initSimulator();
  initCalculator();
  initFaqAccordion();
  initMobileNav();
  initCopyButtons();
});

/* ==========================================================================
   1. FLOATING MATH PARTICLES BACKGROUND
   ========================================================================== */
function initBackgroundMathParticles() {
  const container = document.getElementById('mathBgGrid');
  if (!container) return;

  const symbols = ['∫', '∑', 'π', '√x', 'dx', 'lim', 'sin α', 'E=mc²', 'f(x)', '∆', 'λ', 'x²', '∞', 'log₂', 'θ'];
  const particleCount = 24;

  for (let i = 0; i < particleCount; i++) {
    const el = document.createElement('span');
    el.className = 'math-symbol';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Random position & timing
    el.style.left = `${Math.random() * 95}%`;
    el.style.animationDelay = `${Math.random() * 15}s`;
    el.style.animationDuration = `${14 + Math.random() * 16}s`;
    el.style.fontSize = `${14 + Math.random() * 22}px`;
    
    const colors = ['#00f0ff', '#a855f7', '#ec4899', '#3b82f6'];
    el.style.color = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(el);
  }
}

/* ==========================================================================
   2. LIVE SOLVER SIMULATOR WITH 3 STYLES & PRESETS
   ========================================================================== */
const SIMULATOR_DATA = {
  algebra: {
    title: 'Алгебра: Квадратное уравнение',
    query: '2x² - 5x + 2 = 0',
    solutions: {
      bro: {
        badge: 'Стиль «Бро» 🧠',
        text: `Йоу! Смотри, тут обычное квадратное уравнение. Решаем через старый добрый дискриминант:

1. Выписываем коэффициенты: <b>a = 2</b>, <b>b = -5</b>, <b>c = 2</b>.
2. Считаем D = b² - 4ac:
   (-5)² - 4 * 2 * 2 = 25 - 16 = <b>9</b> (корень из 9 это изи тройка: √9 = 3).
3. Находим корни:
   • x₁ = (5 + 3) / (2 * 2) = 8 / 4 = <b>2</b>
   • x₂ = (5 - 3) / 4 = 2 / 4 = <b>0.5</b>

Изи победа! Два корня готовы, можно чиллить. 😎`,
        answer: 'Ответ: x₁ = 2; x₂ = 0.5'
      },
      gost: {
        badge: 'Стиль «ГОСТ» ✍️',
        text: `<b>Уравнение:</b> <code>2x² - 5x + 2 = 0</code>

<b>Коэффициенты:</b>
a = 2, b = -5, c = 2

<b>1. Вычисление дискриминанта:</b>
D = b² - 4ac
D = (-5)² - 4 · 2 · 2 = 25 - 16 = 9
√D = √9 = 3 (D > 0, следовательно уравнение имеет 2 действительных корня)

<b>2. Нахождение корней уравнения:</b>
x = (-b ± √D) / (2a)
x₁ = (5 + 3) / (2 · 2) = 8 / 4 = 2
x₂ = (5 - 3) / (2 · 2) = 2 / 4 = 0.5`,
        answer: 'Ответ: x₁ = 2; x₂ = 0.5'
      },
      shpora: {
        badge: 'Стиль «Шпора» ⚡',
        text: `⚡ <b>Мгновенный ответ:</b>
Уравнение: 2x² - 5x + 2 = 0
Дискриминант: D = 9 (√D = 3)`,
        answer: 'Ответ: x₁ = 2, x₂ = 0.5'
      }
    }
  },

  physics: {
    title: 'Физика: Кинетическая энергия',
    query: 'm = 2 кг, v = 15 м/с. Найти: Eк',
    solutions: {
      bro: {
        badge: 'Стиль «Бро» 🧠',
        text: `Легчайшая задачка на кинетическую энергию! Представь, что ты кинул мяч весом 2 кг со скоростью 15 м/с.

Формула тут база: <b>Eк = (m * v²) / 2</b>

1. Сначала возводим скорость в квадрат: 15² = 225.
2. Умножаем на массу: 225 * 2 = 450.
3. Делим пополам: 450 / 2 = <b>225 Джоулей</b>.

Вот и всё, физика на максималках! ⚡`,
        answer: 'Ответ: Eк = 225 Дж'
      },
      gost: {
        badge: 'Стиль «ГОСТ» ✍️',
        text: `<b>Дано:</b>
m = 2 кг
v = 15 м/с
────────────
<b>Найти:</b> Eк — ?

<b>Формула:</b>
Eк = (m · v²) / 2

<b>Решение:</b>
Eк = (2 кг · (15 м/с)²) / 2
Eк = (2 · 225) / 2 = 225 Дж

<b>Размерность:</b>
[Eк] = кг · (м/с)² = кг · м²/с² = Дж`,
        answer: 'Ответ: Eк = 225 Дж'
      },
      shpora: {
        badge: 'Стиль «Шпора» ⚡',
        text: `⚡ <b>Мгновенный ответ:</b>
Eк = (m · v²) / 2 = 2 · 225 / 2 = 225`,
        answer: 'Ответ: 225 Дж'
      }
    }
  },

  geometry: {
    title: 'Геометрия: Теорема Пифагора',
    query: 'Катеты a = 6 см, b = 8 см. Найти гипотенузу c',
    solutions: {
      bro: {
        badge: 'Стиль «Бро» 🧠',
        text: `О, классический египетский треугольник! Пифагор завещал нам золотое правило:

Сумма квадратов катетов равна квадрату гипотенузы (<b>a² + b² = c²</b>).

1. Возводим катеты в квадрат: 6² = 36, 8² = 64.
2. Складываем их: 36 + 64 = <b>100</b>.
3. Извлекаем корень: √100 = <b>10 см</b>.

Учительница будет в восторге, пятерка в кармане! 📐`,
        answer: 'Ответ: Гипотенуза c = 10 см'
      },
      gost: {
        badge: 'Стиль «ГОСТ» ✍️',
        text: `<b>Дано:</b>
ΔABC — прямоугольный (∠C = 90°)
Катет a (BC) = 6 см
Катет b (AC) = 8 см
────────────────────────
<b>Найти:</b> c (AB) — ?

<b>Решение:</b>
По теореме Пифагора для прямоугольного треугольника:
c² = a² + b²
c² = 6² + 8² = 36 + 64 = 100
c = √100 = 10 (см) (так как длина c > 0)`,
        answer: 'Ответ: c = 10 см'
      },
      shpora: {
        badge: 'Стиль «Шпора» ⚡',
        text: `⚡ <b>Мгновенный ответ:</b>
c = √(6² + 8²) = √(36 + 64) = √100`,
        answer: 'Ответ: 10 см'
      }
    }
  },

  chemistry: {
    title: 'Химия: Расстановка коэффициентов',
    query: 'Уравнять реакцию: Fe + O2 -> Fe2O3',
    solutions: {
      bro: {
        badge: 'Стиль «Бро» 🧠',
        text: `Ржавление железа на пальцах! У нас слева 1 железо и 2 кислорода, а справа 2 железа и 3 кислорода — непорядок.

1. У кислорода 2 слева и 3 справа. Общее кратное — 6. Значит перед O₂ ставим <b>3</b>, а перед Fe₂O₃ ставим <b>2</b>.
2. Теперь считаем железо справа: 2 * 2 = 4 штуки.
3. Значит перед чистым Fe слева ставим <b>4</b>.

Получаем идеальный баланс: <b>4Fe + 3O₂ → 2Fe₂O₃</b>! 🧪`,
        answer: 'Итоговое уравнение: 4Fe + 3O₂ → 2Fe₂O₃'
      },
      gost: {
        badge: 'Стиль «ГОСТ» ✍️',
        text: `<b>Исходная схема реакции:</b>
Fe + O₂ → Fe₂O₃

<b>Анализ атомов:</b>
1. Уравниваем кислород: НОК(2, 3) = 6
   Ставим коэффициент 3 перед O₂ и 2 перед Fe₂O₃:
   Fe + 3O₂ → 2Fe₂O₃
2. Уравниваем железо: справа 2 · 2 = 4 атома Fe.
   Ставим коэффициент 4 перед Fe в левой части:
   4Fe + 3O₂ → 2Fe₂O₃`,
        answer: 'Ответ: 4Fe + 3O₂ = 2Fe₂O₃'
      },
      shpora: {
        badge: 'Стиль «Шпора» ⚡',
        text: `⚡ <b>Коэффициенты:</b> 4, 3, 2`,
        answer: 'Ответ: 4Fe + 3O₂ → 2Fe₂O₃'
      }
    }
  },

  percent: {
    title: 'Проценты: Скидка на товар',
    query: 'Скидка 25% на кроссовки за 7 400 ₽',
    solutions: {
      bro: {
        badge: 'Стиль «Бро» 🧠',
        text: `Лайфхак как быстро посчитать скидку на шмот без калькулятора!

25% — это ровно одна четверть (1/4) от цены.

1. Делим 7 400 на 4: 7 400 / 4 = <b>1 850 ₽</b> (это твоя чистая экономия).
2. Вычитаем из цены: 7 400 - 1 850 = <b>5 550 ₽</b>.

Забирай топовые кроссы по кайфовой цене! 👟`,
        answer: 'Итоговая цена: 5 550 ₽ (скидка: 1 850 ₽)'
      },
      gost: {
        badge: 'Стиль «ГОСТ» ✍️',
        text: `<b>Дано:</b>
Начальная цена S₀ = 7 400 ₽
Размер скидки p = 25%
────────────────────────────
<b>Найти:</b>
Итоговая цена S₁ — ?
Сумма экономии ΔS — ?

<b>Решение:</b>
1. Сумма скидки:
   ΔS = S₀ · (p / 100) = 7 400 · 0.25 = 1 850 ₽
2. Итоговая стоимость с учетом скидки:
   S₁ = S₀ - ΔS = 7 400 - 1 850 = 5 550 ₽`,
        answer: 'Ответ: 5 550 ₽ (экономия 1 850 ₽)'
      },
      shpora: {
        badge: 'Стиль «Шпора» ⚡',
        text: `⚡ <b>Расчет:</b> 7400 · (1 - 0.25) = 7400 · 0.75 = 5550`,
        answer: 'Ответ: 5 550 ₽'
      }
    }
  }
};

let currentSubject = 'algebra';
let currentMode = 'bro';

function initSimulator() {
  const tabButtons = document.querySelectorAll('.sim-tab-btn');
  const styleButtons = document.querySelectorAll('.style-btn');
  const simInput = document.getElementById('simInput');
  const solveBtn = document.getElementById('simSolveBtn');

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSubject = btn.getAttribute('data-subject');
      
      if (simInput && SIMULATOR_DATA[currentSubject]) {
        simInput.value = SIMULATOR_DATA[currentSubject].query;
      }
      renderSimulatorOutput();
    });
  });

  // Mode switching (Bro / GOST / Shpora)
  styleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      styleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.getAttribute('data-mode');
      renderSimulatorOutput();
    });
  });

  // Custom Solve button
  if (solveBtn) {
    solveBtn.addEventListener('click', () => {
      renderSimulatorOutput(true);
    });
  }

  // Initial render
  if (simInput && SIMULATOR_DATA[currentSubject]) {
    simInput.value = SIMULATOR_DATA[currentSubject].query;
  }
  renderSimulatorOutput();
}

function renderSimulatorOutput(isCustom = false) {
  const badgeEl = document.getElementById('simBadgeMode');
  const bodyEl = document.getElementById('simContentBody');
  const simInput = document.getElementById('simInput');

  if (!bodyEl) return;

  const subjectData = SIMULATOR_DATA[currentSubject];
  if (!subjectData) return;

  const modeData = subjectData.solutions[currentMode];

  // Visual feedback: brief opacity change
  bodyEl.style.opacity = '0.3';
  bodyEl.style.transform = 'translateY(4px)';
  bodyEl.style.transition = 'all 0.18s ease';

  setTimeout(() => {
    if (badgeEl) {
      badgeEl.className = `sim-badge-mode ${currentMode}`;
      badgeEl.textContent = modeData.badge;
    }

    let renderedHtml = `
      <div style="margin-bottom: 12px; color: var(--text-muted); font-size: 0.9rem;">
        Запрос: <code>${simInput ? simInput.value : subjectData.query}</code>
      </div>
      <div>${modeData.text.replace(/\n/g, '<br>')}</div>
      <div class="answer-highlight">${modeData.answer}</div>
    `;

    bodyEl.innerHTML = renderedHtml;
    bodyEl.style.opacity = '1';
    bodyEl.style.transform = 'translateY(0)';
  }, 140);
}

/* ==========================================================================
   3. TIME & STRESS SAVED CALCULATOR
   ========================================================================== */
function initCalculator() {
  const hwSlider = document.getElementById('calcHwHours');
  const subSlider = document.getElementById('calcSubjects');
  const hwValBadge = document.getElementById('calcHwVal');
  const subValBadge = document.getElementById('calcSubVal');

  const resHoursEl = document.getElementById('calcResHours');
  const resNervesEl = document.getElementById('calcResNerves');
  const resRatingEl = document.getElementById('calcResRating');

  if (!hwSlider || !subSlider) return;

  function updateCalc() {
    const hours = parseInt(hwSlider.value, 10);
    const subs = parseInt(subSlider.value, 10);

    if (hwValBadge) hwValBadge.textContent = `${hours} ч / нед`;
    if (subValBadge) subValBadge.textContent = `${subs} предм.`;

    // Formulas:
    // AI Shpora cuts homework time by ~75%
    const savedHoursMonth = Math.round(hours * 0.75 * 4.2);
    const savedStress = Math.min(99, Math.round(65 + (hours * 1.8) + (subs * 2)));

    if (resHoursEl) resHoursEl.textContent = `${savedHoursMonth} ч`;
    if (resNervesEl) resNervesEl.textContent = `${savedStress}%`;
    if (resRatingEl) resRatingEl.textContent = '4.9 ★';
  }

  hwSlider.addEventListener('input', updateCalc);
  subSlider.addEventListener('input', updateCalc);
  updateCalc();
}

/* ==========================================================================
   4. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherContent = other.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = `${content.scrollHeight + 30}px`;
      }
    });
  });
}

/* ==========================================================================
   5. MOBILE NAVIGATION TOGGLE
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    toggleBtn.textContent = isOpen ? '✕' : '☰';
  });

  // Close menu when clicking link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.textContent = '☰';
    });
  });
}

/* ==========================================================================
   6. COPY TO CLIPBOARD HELPERS
   ========================================================================== */
function initCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', () => {
      const textToCopy = el.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = el.textContent;
        el.textContent = 'Скопировано! ✓';
        el.style.borderColor = 'var(--neon-cyan)';
        setTimeout(() => {
          el.textContent = originalText;
          el.style.borderColor = '';
        }, 2000);
      });
    });
  });
}

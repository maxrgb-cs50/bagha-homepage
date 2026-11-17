(() => {

  /* Header: hairline once the page scrolls */
  const header = document.querySelector('[data-header]');
  const onScroll = () => header.toggleAttribute('data-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu */
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Menü schließen' : 'Menü öffnen';
    menu.toggleAttribute('data-open', open);
    menu.inert = !open;
  };
  menu.inert = true;
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.hasAttribute('data-open')) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* Scroll reveal – once per container */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* Digital timeline: connector fills with scroll, steps activate as the reading line passes */
  const flow = document.querySelector('[data-flow]');
  if (flow) {
    const steps = [...flow.querySelectorAll('.flow-step')];
    const nodes = steps.map((s) => s.querySelector('.flow-node'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let ticking = false;
    const update = () => {
      ticking = false;
      const line = window.innerHeight * 0.6;
      steps.forEach((step, i) => {
        const n = nodes[i].getBoundingClientRect();
        step.classList.toggle('is-active', n.top + n.height / 2 <= line);
        const start = n.bottom + 8;
        const end = step.getBoundingClientRect().bottom - 8;
        const seg = Math.min(1, Math.max(0, (line - start) / Math.max(1, end - start)));
        step.style.setProperty('--seg', seg.toFixed(3));
      });
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    const showAll = () => steps.forEach((s) => { s.classList.add('is-active'); s.style.setProperty('--seg', '1'); });
    if (reduce.matches || !('IntersectionObserver' in window)) {
      showAll();
    } else {
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', onScroll, { passive: true });
          window.addEventListener('resize', onScroll);
          update();
        } else {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onScroll);
          update();
        }
      }).observe(flow);
    }
  }

  /* Active section in nav */
  const navLinks = [...document.querySelectorAll('.main-nav a')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => {
          if (a.getAttribute('href') === '#' + entry.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  /* Tabs with clip-path highlight */
  const tabsRoot = document.querySelector('[data-tabs]');
  if (tabsRoot) {
    const tabs = [...tabsRoot.querySelectorAll('[role="tab"]')];
    const highlight = tabsRoot.querySelector('[data-tab-highlight]');
    const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));

    const clipTo = (tab, instant) => {
      const listWidth = highlight.offsetWidth;
      const left = tab.offsetLeft;
      const right = listWidth - (left + tab.offsetWidth);
      if (instant) highlight.setAttribute('data-instant', '');
      highlight.style.clipPath = `inset(0 ${right}px 0 ${left}px)`;
      if (instant) requestAnimationFrame(() => requestAnimationFrame(() => highlight.removeAttribute('data-instant')));
    };

    const select = (index, { focus = false, instant = false } = {}) => {
      tabs.forEach((t, i) => {
        const on = i === index;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        panels[i].hidden = !on;
        panels[i].removeAttribute('data-entering');
      });
      const panel = panels[index];
      // Keyboard switching is instant: no highlight slide, no panel fade
      if (!instant) {
        void panel.offsetWidth;
        panel.setAttribute('data-entering', '');
      }
      clipTo(tabs[index], instant);
      document.dispatchEvent(new CustomEvent('audience', { detail: tabs[index].dataset.gruppe }));
      if (focus) {
        tabs[index].focus();
        tabs[index].scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', (e) => select(i, { instant: e.detail === 0 }));
      tab.addEventListener('keydown', (e) => {
        const kb = { focus: true, instant: true };
        const map = { ArrowRight: 1, ArrowLeft: -1 };
        if (e.key in map) { e.preventDefault(); select((i + map[e.key] + tabs.length) % tabs.length, kb); }
        if (e.key === 'Home') { e.preventDefault(); select(0, kb); }
        if (e.key === 'End') { e.preventDefault(); select(tabs.length - 1, kb); }
      });
    });

    const current = () => tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0];
    clipTo(current(), true);
    document.fonts && document.fonts.ready.then(() => clipTo(current(), true));
    new ResizeObserver(() => clipTo(current(), true)).observe(tabsRoot);
  }

  /* Toasts */
  const region = document.querySelector('[data-toast-region]');
  const toast = (title, text) => {
    region.querySelectorAll('.toast').forEach((t) => t.remove());
    const el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg><div><strong></strong><span></span></div>`;
    el.querySelector('strong').textContent = title;
    el.querySelector('span').textContent = text;
    region.appendChild(el);
    requestAnimationFrame(() => requestAnimationFrame(() => el.setAttribute('data-mounted', '')));

    let remaining = 6000, started = Date.now(), timer;
    const onVisibility = () => (document.hidden ? pause() : start());
    const dismiss = () => {
      document.removeEventListener('visibilitychange', onVisibility);
      el.setAttribute('data-removed', '');
      el.addEventListener('transitionend', () => el.remove(), { once: true });
      setTimeout(() => el.remove(), 500);
    };
    const start = () => { clearTimeout(timer); started = Date.now(); timer = setTimeout(dismiss, remaining); };
    const pause = () => { clearTimeout(timer); remaining -= Date.now() - started; };
    // Pause while hovered or when the tab is hidden
    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', start);
    document.addEventListener('visibilitychange', onVisibility);
    start();
  };

  /* Contact form → prepares an e-mail in the mail client (no backend yet) */
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const MAIL = 'h.bagha@steuerkanzlei-bagha.de';
    const result = form.querySelector('[data-form-result]');
    const rules = [
      { el: form.elements.name, test: (v) => v.trim().length > 1 },
      { el: form.elements.email, test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) },
      { el: form.elements.nachricht, test: (v) => v.trim().length > 4 },
      { el: form.elements.consent, test: (_, el) => el.checked },
    ];
    const validate = (rule) => {
      const ok = rule.test(rule.el.value, rule.el);
      const field = rule.el.closest('.field');
      field.toggleAttribute('data-invalid', !ok);
      rule.el.setAttribute('aria-invalid', String(!ok));
      const err = field.querySelector('.field-error');
      if (err) rule.el.setAttribute('aria-describedby', err.id);
      return ok;
    };
    rules.forEach((rule) => {
      const evt = rule.el.type === 'checkbox' ? 'change' : 'input';
      rule.el.addEventListener(evt, () => { if (rule.el.closest('.field').hasAttribute('data-invalid')) validate(rule); });
      rule.el.addEventListener('blur', () => { if (rule.el.value) validate(rule); });
    });

    // Carry the audience chosen elsewhere on the page into "Ich bin", until the visitor picks one here
    let audienceTouched = false;
    const radios = [...form.elements.gruppe];
    radios.forEach((r) => r.addEventListener('change', () => { audienceTouched = true; }));
    const setAudience = (value) => {
      if (!value || audienceTouched) return;
      const radio = radios.find((r) => r.value === value);
      if (radio) radio.checked = true;
    };
    document.addEventListener('audience', (e) => setAudience(e.detail));
    document.querySelectorAll('[data-gruppe-link]').forEach((link) => {
      link.addEventListener('click', () => setAudience(link.dataset.gruppeLink));
    });

    let prepared = { subject: '', body: '' };
    const copy = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = Object.assign(document.createElement('textarea'), { value: text });
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
    };
    form.querySelectorAll('[data-copy]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        if (btn.dataset.copy === 'address') {
          await copy(MAIL);
          toast('Adresse kopiert.', MAIL);
        } else {
          await copy(`An: ${MAIL}\nBetreff: ${prepared.subject}\n\n${prepared.body}`);
          toast('Nachricht kopiert.', 'Fügen Sie sie in eine neue E-Mail ein.');
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const results = rules.map(validate);
      const firstBad = rules[results.indexOf(false)];
      if (firstBad) { firstBad.el.focus(); return; }

      const d = Object.fromEntries(new FormData(form));
      prepared.subject = `Anfrage über die Website – ${d.gruppe}`;
      prepared.body = [
        `Name: ${d.name}`,
        `E-Mail: ${d.email}`,
        d.telefon ? `Telefon: ${d.telefon}` : null,
        `Ich bin: ${d.gruppe}`,
        d.gespraech ? `Gespräch am liebsten: ${d.gespraech}` : null,
        '',
        d.nachricht,
      ].filter((l) => l !== null).join('\n');
      window.location.href = `mailto:${MAIL}?subject=${encodeURIComponent(prepared.subject)}&body=${encodeURIComponent(prepared.body)}`;
      // The form keeps its content; the visitor still has to send the mail themselves
      result.hidden = false;
      result.focus({ preventScroll: true });
      result.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  }
})();

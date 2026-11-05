'use strict';
// Project filtering: a meaningful, accessible interaction with live result feedback.
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(filter => { const selected = filter === button; filter.classList.toggle('active', selected); filter.setAttribute('aria-pressed', String(selected)); });
  let visible = 0;
  projects.forEach(project => { const show = category === 'all' || project.dataset.category === category; project.hidden = !show; if (show) visible++; });
  document.querySelector('#project-count').textContent = `${visible} project${visible === 1 ? '' : 's'}`;
}));
// Persist the chosen theme when browser storage is available.
const themeButton = document.querySelector('#theme');
function applyTheme(dark) { document.body.classList.toggle('dark', dark); themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme'); }
try { applyTheme(localStorage.getItem('asma-theme') === 'dark'); } catch (_) { /* The page still works if storage is disabled. */ }
themeButton.addEventListener('click', () => { const dark = !document.body.classList.contains('dark'); applyTheme(dark); try { localStorage.setItem('asma-theme', dark ? 'dark' : 'light'); } catch (_) {} });
const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); } });
document.querySelector('#print').addEventListener('click', () => window.print());

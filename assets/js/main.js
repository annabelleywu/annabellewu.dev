/* ===================================================================
   main.js — small bits of interactivity. You usually won't need to
   edit this file; content changes happen in index.html.
   =================================================================== */

/* ---------- 1. Light / dark mode toggle ----------
   Clicking the ◐ button flips the theme and remembers the choice
   in the browser (localStorage) so it sticks on the next visit. */
const root = document.documentElement;
const themeBtn = document.querySelector('.theme-toggle');

themeBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

/* ---------- 2. Mobile hamburger menu ----------
   On small screens the nav links are hidden; the ☰ button shows them. */
const menuBtn = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.textContent = open ? '✕' : '☰';
});
// Close the menu after tapping a link
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', false);
    menuBtn.textContent = '☰';
  })
);

/* ---------- 3. Fade-in sections on scroll ----------
   Watches every element with class="reveal" and adds "visible"
   once it scrolls onto the screen (animation is defined in style.css). */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---------- 4. Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

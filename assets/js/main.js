/* ===================================================================
   main.js — small bits of interactivity. You usually won't need to
   edit this file; content changes happen in index.html.
   =================================================================== */

/* ---------- 1. Highlight the current section in the nav ----------
   As you scroll, the pill behind "Home / Experience / Projects /
   School" moves to whichever section is on screen. */
const navLinks = document.querySelectorAll('.nav__links a');
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href')));

function updateActive() {
  let current = sections[0];
  for (const s of sections) {
    if (s && s.getBoundingClientRect().top <= 140) current = s;
  }
  navLinks.forEach(a =>
    a.classList.toggle('active', a.getAttribute('href') === '#' + current.id)
  );
}
window.addEventListener('scroll', updateActive, { passive: true });
updateActive();

/* ---------- 2. Mobile hamburger menu ----------
   On small screens the nav links hide behind the ☰ button. */
const menuBtn = document.querySelector('.nav__toggle');
const linksBox = document.querySelector('.nav__links');

function setMenu(open) {
  linksBox.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.textContent = open ? '✕' : '☰';
}
menuBtn.addEventListener('click', () => setMenu(!linksBox.classList.contains('open')));
navLinks.forEach(a => a.addEventListener('click', () => setMenu(false)));

/* ---------- 3. Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

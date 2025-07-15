// main.js
// This script handles the form submission and section visibility on scroll
'use strict';   

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por contactarme! Te responderé pronto.');
    form.reset();
  });

  const secciones = document.querySelectorAll('section');
  secciones.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transition = 'opacity 1s ease';
  });

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = 1;
      }
    });
  }, {
    threshold: 0.2
  });

  secciones.forEach(sec => observer.observe(sec));
});

"use strict";

var burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  var body = document.body;
  var overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  function toggleMenu() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
  }

  function closeMenu() {
    burger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  overlay.addEventListener('click', closeMenu);
  var navLinks = document.querySelectorAll('.nav__menu a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });
});
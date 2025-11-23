"use strict";

var burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
});
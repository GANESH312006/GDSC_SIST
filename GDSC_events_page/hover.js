'use strict';

// This file contains the logic for card hovering.

const images = document.querySelectorAll('.card');

images.forEach(function (img) {
  img.addEventListener('mouseover', function (e) {
    if (e.target.matches(':hover')) {
      this.querySelector('.slide-content').classList.remove('slide-hidden');
    }
  });
});

images.forEach(function (img) {
  img.addEventListener('mouseleave', function (e) {
    this.querySelector('.slide-content').classList.add('slide-hidden');
  });
});

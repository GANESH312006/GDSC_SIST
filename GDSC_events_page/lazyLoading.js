'use strict';

// This file contains logic for lazyloading of the images.

const lazyImg = document.querySelectorAll('.lazy-img');
const imgSection = document.querySelectorAll('.slide-content');

const scrollBtn = document.querySelector('.scroll-to-top');

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// btn pops up after scrollY > 500
window.addEventListener('scroll', () => {
  window.scrollY > 500
    ? scrollBtn.classList.add('show')
    : scrollBtn.classList.remove('show');
});

const showImg = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.setAttribute('src', entry.target.dataset.src);
  entry.target.classList.remove('lazy-img');
  entry.target.classList.add('loaded');

  observer.unobserve(entry.target);
};

const imageObs = new IntersectionObserver(showImg, {
  root: null,
  threshold: 0.7,
});

lazyImg.forEach(img => {
  imageObs.observe(img);
});

// Reveals the event3 to  event6
const showSection = entries => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // To remove the class for the elem event 3 - event6
  entry.target.classList.remove('reveal-section-hidden');
};

const sectionObserver = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.2,
});

imgSection.forEach(sect => {
  sectionObserver.observe(sect);
});

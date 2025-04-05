'use strict';

// This file contains logic for lazyloading of the images.

// Selecting img for lazy loading
const lazyImg = document.querySelectorAll('.lazy-img');
const lazyImgContainer = document.querySelectorAll('.lazy-img-container');

const scrollBtn = document.querySelector('.scroll-to-top');

// Revealing the section
const imgSection = document.querySelectorAll('.reveal-section');

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

  entry.target
    .closest('.lazy-img-container')
    .classList.remove('lazy-img-container');

  observer.unobserve(entry.target);
};

const imageObs = new IntersectionObserver(showImg, {
  root: null,
  threshold: 0.7,
});

const lazyImgContainerObs = new IntersectionObserver(showImg, {
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

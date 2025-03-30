document.addEventListener("DOMContentLoaded", () => {
  const parallaxEvents = document.querySelectorAll(".parallax-event");
  const scrollToTopButton = document.querySelector(".scroll-to-top");
  const parallaxBackground = document.querySelector(".parallax-background");

  // Throttle function to limit scroll event firing
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Parallax Scroll Effect
  const parallaxScroll = () => {
    // Parallax background movement
    const scrollPosition = window.pageYOffset;
    parallaxBackground.style.transform = `translateZ(-1px) scale(2) translateY(${
      scrollPosition * 0.5
    }px)`;

    // Event reveal effect
    parallaxEvents.forEach((event) => {
      const eventPosition = event.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (
        eventPosition.top < windowHeight * 0.75 &&
        eventPosition.bottom >= 0
      ) {
        event.classList.add("active");
      } else {
        event.classList.remove("active");
      }
    });

    // Scroll to Top Button Visibility
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  // Scroll to Top Functionality
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Event Listeners with throttling
  window.addEventListener("scroll", throttle(parallaxScroll, 50));
  window.addEventListener("resize", throttle(parallaxScroll, 50));

  // Initial Check
  parallaxScroll();
});

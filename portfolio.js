document.addEventListener('DOMContentLoaded', function () {
  const aboutSection = document.querySelector('#about');
  const textContainer = document.querySelector('.about-text-container');
  const diamondContainer = document.querySelector('.diamond-container');

  // Initialize IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the transition classes when the section is in view
          textContainer.classList.add('slide-in-left');
          diamondContainer.classList.add('slide-in-right');
        } else {
          // Remove the transition classes when the section is out of view
          textContainer.classList.remove('slide-in-left');
          diamondContainer.classList.remove('slide-in-right');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe the about section
  observer.observe(aboutSection);
});

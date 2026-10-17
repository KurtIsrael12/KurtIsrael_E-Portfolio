if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const elements = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.classList.add('pre-fade');
    observer.observe(el);
  });
}

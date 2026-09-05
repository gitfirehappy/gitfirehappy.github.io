// Theme interactions. The background image is loaded directly by CSS.
(function() {
  'use strict';

  // === Scroll hint: hero bottom chevron ===
  var hint = document.querySelector('.scroll-hint');
  if (hint) {
    // Click → scroll to content
    hint.addEventListener('click', function() {
      var target = document.querySelector('.content-wrapper');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
    // Hide when hero scrolled past
    if (window.IntersectionObserver) {
      var hero = document.getElementById('hero');
      if (hero) {
        new IntersectionObserver(function(entries) {
          hint.style.opacity = entries[0].isIntersecting ? '1' : '0';
          hint.style.pointerEvents = entries[0].isIntersecting ? 'auto' : 'none';
        }, { threshold: 0.9 }).observe(hero);
      }
    }
  }

  // === Back to top ===
  var backTop = document.getElementById('back-top');
  if (backTop) {
    var scrollHandler = function() {
      var scrollY = window.scrollY || window.pageYOffset;
      var docHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      var needsScroll = docHeight > window.innerHeight + 60;
      if (needsScroll && scrollY > window.innerHeight * 0.6) {
        backTop.classList.add('show');
      } else {
        backTop.classList.remove('show');
      }
    };
    // Throttled scroll listener
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() { scrollHandler(); ticking = false; });
        ticking = true;
      }
    });
    scrollHandler(); // initial check
    backTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

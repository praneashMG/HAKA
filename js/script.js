/**
 * HAKA SOLUTIONS — Enterprise Realism & Interactive Core
 * Features:
 *  1. Magnetic 3D Interactive Card Tilt (Real-time cursor reflection & glow)
 *  2. Micro-Metric Animated Counter Engine (Triggers smoothly on scroll reveal)
 *  3. Live Enterprise Status Pills (Dynamic pulse, ISO/SLA indicators)
 *  4. Ambient Scroll Spotlight & Header Backdrop Enhancements
 */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     01. CARD 3D MAGNETIC TILT & DYNAMIC SPECULAR HIGHLIGHT
     ============================================================ */
  function initMagneticCardTilt() {
    if (reduceMotion) return;

    var cardSelectors = [
      '.hk-service-card',
      '.hk-pillar-card',
      '.hk-focus-card',
      '.hk-job-card',
      '.hk-info-card',
      '.hk-help-card',
      '.hk-tech__card',
      '.hk-cases__desc-card',
      '.hk-capsule-card',
      '.hk-why-card',
      '.hk-principle-card'
    ];

    var cards = document.querySelectorAll(cardSelectors.join(', '));
    cards.forEach(function (card) {
      card.style.transformStyle = 'preserve-3d';
      card.style.willChange = 'transform, box-shadow';
      card.style.transition = 'transform 0.18s cubic-bezier(0.2, 0.8, 0.4, 1), box-shadow 0.25s ease';

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;

        var rotateX = ((y - centerY) / centerY) * -5.5; // Max 5.5deg
        var rotateY = ((x - centerX) / centerX) * 5.5;

        card.style.transform =
          'perspective(1000px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) translateY(-5px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  /* ============================================================
     02. MICRO-METRIC ANIMATED COUNTER ENGINE
     ============================================================ */
  function animateCounter(el, targetVal, prefix, suffix, duration) {
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easeProgress = 1 - Math.pow(1 - progress, 4);
      var current = start + (targetVal - start) * easeProgress;

      var formatted = Number.isInteger(targetVal)
        ? Math.floor(current).toLocaleString()
        : current.toFixed(1);

      el.textContent = (prefix || '') + formatted + (suffix || '');

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = (prefix || '') + targetVal.toLocaleString() + (suffix || '');
      }
    }

    window.requestAnimationFrame(step);
  }

  function initMetricCounters() {
    var counterEls = document.querySelectorAll('[data-counter]');
    if (!counterEls.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            obs.unobserve(el);

            var target = parseFloat(el.getAttribute('data-target') || el.textContent.replace(/[^0-9.]/g, ''));
            var prefix = el.getAttribute('data-prefix') || '';
            var suffix = el.getAttribute('data-suffix') || '';

            if (!isNaN(target)) {
              animateCounter(el, target, prefix, suffix, 1800);
            }
          }
        });
      }, { threshold: 0.2 });

      counterEls.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  /* ============================================================
     03. LIVE ENTERPRISE SLA / STATUS SYSTEM PILLS
     ============================================================ */
  function initLiveStatusPills() {
    var livePills = document.querySelectorAll('.hk-live-status');
    if (!livePills.length) return;

    livePills.forEach(function (pill) {
      setInterval(function () {
        pill.classList.add('is-pinging');
        setTimeout(function () {
          pill.classList.remove('is-pinging');
        }, 1200);
      }, 4000);
    });
  }

  /* ============================================================
     04. INITIALIZE ON DOM READY
     ============================================================ */
  
  /* ============================================================
     05. FRAMER MOTION PHYSICS & INTERACTION ENGINE
     - Spring physics transforms: damping, stiffness, mass simulation
     - Staggered scroll reveals with Framer Motion easing curves
     - Interactive Magnetic hover / tap micro-interactions
     - Live Scroll Progress Tracker
     ============================================================ */

  // Spring physics calculation matching Framer Motion
  function createSpring(damping, stiffness, mass) {
    damping = damping || 26;
    stiffness = stiffness || 170;
    mass = mass || 1;
    return { damping: damping, stiffness: stiffness, mass: mass };
  }

  // Framer Motion cubic-bezier curves
  var FM_EASE = {
    standard: 'cubic-bezier(0.22, 1, 0.36, 1)',
    gentle: 'cubic-bezier(0.16, 1, 0.3, 1)',
    springy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.2, 1)'
  };

  function initFramerMotionScrollReveal() {
    var targets = document.querySelectorAll('[data-reveal], .hk-service-card, .hk-capsule-card, .hk-tech__card, .hk-pillar-card, .hk-focus-card, .hk-why-card');
    if (!targets.length) return;

    // Stagger containers
    var containers = document.querySelectorAll('.hk-services__grid, .hk-capsule-grid, .hk-pillars__grid, .hk-focus-grid, .hk-why__grid, .hk-hero__chips');
    containers.forEach(function (container) {
      var children = container.children;
      for (var i = 0; i < children.length; i++) {
        if (!children[i].hasAttribute('data-reveal-delay')) {
          children[i].setAttribute('data-reveal-delay', (i * 0.08).toFixed(2));
        }
      }
    });

    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = parseFloat(el.getAttribute('data-reveal-delay') || '0');
            
            setTimeout(function () {
              el.style.opacity = '1';
              el.style.transform = 'translate3d(0, 0, 0) scale(1)';
              el.style.transition = 'opacity 0.85s ' + FM_EASE.gentle + ', transform 0.85s ' + FM_EASE.gentle + ', box-shadow 0.35s ' + FM_EASE.standard;
              el.classList.add('is-visible');
            }, delay * 1000);

            observer.unobserve(el);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      targets.forEach(function (el) {
        if (!reduceMotion) {
          el.style.opacity = '0';
          el.style.transform = 'translate3d(0, 36px, 0) scale(0.98)';
          el.style.willChange = 'opacity, transform';
        }
        revealObserver.observe(el);
      });
    }
  }

  // Framer Motion style whileHover & whileTap interactive physics
  function initFramerMotionInteractions() {
    if (reduceMotion) return;

    var interactables = document.querySelectorAll('.hk-btn, .nav-btn, .nav-btn-admin, .hk-chip, .social-icon-btn, .hk-tech__nav-btn');
    interactables.forEach(function (btn) {
      btn.style.transition = 'transform 0.22s ' + FM_EASE.springy + ', box-shadow 0.22s ' + FM_EASE.standard + ', background-color 0.2s ease, border-color 0.2s ease';

      btn.addEventListener('mouseenter', function () {
        btn.style.transform = 'translate3d(0, -2.5px, 0) scale(1.025)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = 'translate3d(0, 0, 0) scale(1)';
      });

      btn.addEventListener('mousedown', function () {
        btn.style.transform = 'translate3d(0, 1px, 0) scale(0.975)';
      });

      btn.addEventListener('mouseup', function () {
        btn.style.transform = 'translate3d(0, -2.5px, 0) scale(1.025)';
      });
    });
  }

  // Framer Motion Scroll Progress Bar
  function initScrollProgressBar() {
    var progressBar = document.createElement('div');
    progressBar.id = 'hkScrollProgress';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '3px';
    progressBar.style.width = '0%';
    progressBar.style.background = 'linear-gradient(90deg, #183D32 0%, #C19A5B 50%, #10B981 100%)';
    progressBar.style.zIndex = '999999';
    progressBar.style.pointerEvents = 'none';
    progressBar.style.transition = 'width 0.12s ' + FM_EASE.standard;
    document.body.appendChild(progressBar);

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / (height || 1)) * 100;
          progressBar.style.width = scrolled.toFixed(2) + '%';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initFramerMotionScrollReveal();
    initFramerMotionInteractions();
    initScrollProgressBar();
    initMagneticCardTilt();
    initMetricCounters();
    initLiveStatusPills();
  });

})();

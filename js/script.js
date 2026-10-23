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
  document.addEventListener('DOMContentLoaded', function () {
    initMagneticCardTilt();
    initMetricCounters();
    initLiveStatusPills();
  });

})();

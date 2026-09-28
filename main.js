(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (toggle && nav) {
    var setMenu = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  var bar = document.querySelector('.progress');

  if (bar) {
    var updateBar = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = pct + '%';
    };
    updateBar();
    window.addEventListener('scroll', updateBar, { passive: true });
  }

  var targets = document.querySelectorAll(
    '.section-label, .section-title, .lead, .dossier, .terminal,' +
    '.clearance__col, .work-card, .transmission, .tl-item, .exp-card,' +
    '.meta-grid, .post-row, .case-figure, .contact-grid, .cta-block'
  );

  Array.prototype.forEach.call(targets, function (el, i) {
    el.classList.add('reveal');

    if (el.matches('.clearance__col, .work-card, .tl-item, .exp-card, .post-row')) {
      el.style.setProperty('--d', (i % 4) * 0.09 + 's');
    }
  });

  var revealables = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add('is-in');
    });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);

        var bars = entry.target.querySelectorAll('.skill__fill');
        Array.prototype.forEach.call(bars, function (b) {
          b.style.width = (b.dataset.level || 0) + '%';
        });
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });

    Array.prototype.forEach.call(revealables, function (el) {
      io.observe(el);
    });
  }

  var boot = document.querySelector('.hero__boot');

  if (boot) {
    var lines = [
      'Retrieving portfolio...',
      'Access granted'
    ];

    var file = boot.closest('.file');
    var stampFile = function () {
      if (file) file.classList.add('is-stamped');
    };

    if (reduced) {
      boot.innerHTML = lines.map(function (l) {
        return '<span>' + l + '</span>';
      }).join('');
      stampFile();
    } else {
      var li = 0, ci = 0, current = null;

      var type = function () {
        if (li >= lines.length) {
          var cur = document.createElement('span');
          cur.className = 'cursor';
          boot.lastChild.appendChild(cur);
          setTimeout(stampFile, 260);
          return;
        }
        if (ci === 0) {
          current = document.createElement('span');
          boot.appendChild(current);
        }
        current.textContent = lines[li].slice(0, ++ci);

        if (ci < lines[li].length) {
          setTimeout(type, 28);
        } else {
          li++; ci = 0;
          setTimeout(type, 380);
        }
      };
      setTimeout(type, 700);
    }
  }

  var form = document.querySelector('#contact-form');

  if (form) {
    var note = form.querySelector('.form-note');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('[name="name"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var message = form.querySelector('[name="message"]').value.trim();

      if (!name || !email || !message) {
        note.textContent = 'TRANSMISSION FAILED · ALL FIELDS REQUIRED';
        note.classList.remove('is-ok');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = 'TRANSMISSION FAILED · INVALID EMAIL ADDRESS';
        note.classList.remove('is-ok');
        return;
      }

      note.textContent = 'TRANSMITTING...';
      note.classList.remove('is-ok');

      setTimeout(function () {
        note.textContent = 'TRANSMISSION RECEIVED · REPLY WITHIN 48 HOURS';
        note.classList.add('is-ok');
        form.reset();
      }, 900);
    });
  }
})();

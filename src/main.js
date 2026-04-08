/* ============================================
   OnIA - Main JavaScript
   All interactivity and functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Page Loader (Optimized) ----
  const pageLoader = document.getElementById('pageLoader');
  
  function hideLoader() {
    if (pageLoader && !pageLoader.classList.contains('hidden')) {
      pageLoader.classList.add('hidden');
      setTimeout(() => {
        pageLoader.remove();
        // Refresh ScrollTrigger after layout is stable
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 600);
    }
  }

  if (pageLoader) {
    if (document.readyState === 'complete') {
      setTimeout(hideLoader, 300);
    } else {
      window.addEventListener('load', () => setTimeout(hideLoader, 300));
    }
    // Fallback security
    setTimeout(hideLoader, 2500);
  }

  // ---- Mobile Menu Toggle ----
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Sticky Header on Scroll ----
  const header = document.getElementById('header');
  function handleHeaderScroll() {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        // En subpáginas, el header suele ser siempre scrolled, 
        // pero en el index queremos el efecto transparente arriba.
        if (window.location.pathname.includes('index') || window.location.pathname === '/') {
          header.classList.remove('scrolled');
        } else {
          header.classList.add('scrolled');
        }
      }
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Init state

  // ---- Smooth Scrolling for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- Back to Top Button ----
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Contact Form Handling ----
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous errors
      document.querySelectorAll('.form-error').forEach(err => err.classList.remove('show'));

      // Get form values
      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const service = document.getElementById('service');

      let isValid = true;

      // Validate first name
      if (!firstName.value.trim()) {
        document.getElementById('firstNameError').classList.add('show');
        isValid = false;
      }

      // Validate last name
      if (!lastName.value.trim()) {
        document.getElementById('lastNameError').classList.add('show');
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').classList.add('show');
        isValid = false;
      }

      // Validate message
      if (!message.value.trim()) {
        document.getElementById('messageError').classList.add('show');
        isValid = false;
      }

      if (!isValid) return;

      // Build WhatsApp link BEFORE any async code so it's tied to the user gesture
      const whatsappNumber = '59175470140';
      const text = encodeURIComponent(
        `¡Hola OnIA Agency! Tengo una consulta:\n\n` +
        `*Nombre:* ${firstName.value} ${lastName.value}\n` +
        `*Email:* ${email.value}\n` +
        `*Servicio:* ${service.options[service.selectedIndex].text}\n\n` +
        `*Mensaje:*\n${message.value}`
      );
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;

      // Open WhatsApp reliably natively or via web using location.href
      window.location.href = whatsappUrl;

      // Show loading state
      const submitBtn = document.getElementById('submitBtn');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      // Show success state after brief delay
      setTimeout(() => {
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');

        // GSAP success animation
        if (typeof gsap !== 'undefined') {
          gsap.from('#formSuccess > *', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'back.out(1.7)'
          });
        }

        // Reset form after showing success
        setTimeout(() => {
          contactForm.reset();
          contactForm.style.display = '';
          formSuccess.classList.remove('show');
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
        }, 4000);
      }, 800);
    });

    // Live validation: remove error on input
    contactForm.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('input', function () {
        const errorId = this.id + 'Error';
        const errorEl = document.getElementById(errorId);
        if (errorEl) {
          errorEl.classList.remove('show');
        }
      });
    });
  }

  // ---- Parallax Subtle Effect on Hero ----
  const hero = document.querySelector('.hero');
  if (hero && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        hero.style.setProperty('--parallax-y', `${scrollY * 0.3}px`);
      }
    }, { passive: true });
  }

  // ---- Typing / Counter Animation for Stats ----
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .about-stat .number');

    counters.forEach(counter => {
      const text = counter.textContent;
      const hasPlus = text.includes('+');
      const hasPercent = text.includes('%');
      const numValue = parseFloat(text.replace(/[^0-9.]/g, ''));

      if (isNaN(numValue)) return;

      let current = 0;
      const duration = 1500;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        current = numValue * easeOut;

        let displayValue;
        if (numValue % 1 !== 0) {
          displayValue = current.toFixed(1);
        } else {
          displayValue = Math.floor(current);
        }

        counter.textContent = displayValue + (hasPercent ? '%' : '') + (hasPlus ? '+' : '');

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }

      // Start animation when element is visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            requestAnimationFrame(updateCounter);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(counter);
    });
  }

  // ---- GSAP Premium Animations ----
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Initial load animations (Timeline)
    const tl = gsap.timeline();
    
    tl.from('.header', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from('.hero-badge, .breadcrumb', { y: 20, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.4')
      .from('.hero-title, .page-hero .section-title', { y: 30, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.6')
      .from('.hero-description, .page-hero .section-subtitle', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-actions', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-stats', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');

    // Scroll trigger animations for ALL secondary reveal elements
    // We filter out elements that are already handled by the initial timeline to avoid conflicts
    gsap.utils.toArray('.reveal, .service-card, .process-step, .about-stat, .value-card').forEach((el) => {
      // If it's a hero element, we skip it here as it was handled by the timeline
      if (el.closest('.hero') || el.closest('.page-hero')) return;

      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          onEnter: () => el.classList.add('visible'),
          onEnterBack: () => el.classList.add('visible')
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    });
    
    // Smooth parallax for hero bg
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) {
      gsap.to(heroBg, {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 150,
        ease: 'none'
      });
    }
  }

  animateCounters();

});

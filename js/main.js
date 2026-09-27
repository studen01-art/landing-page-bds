/**
 * Vinhomes Grand Park — Main JavaScript
 * Frontend interactions & UI enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar scroll effect
  const navbar = document.querySelector('.navbar-custom');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScroll = () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    // Navbar style
    if (scrollPos > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. Back to top action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. Close mobile navbar when clicking navigation links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // 4. Frontend-only Lead Form Submission Demonstration
  const leadForm = document.getElementById('leadCaptureForm');
  const formFeedback = document.getElementById('formFeedbackAlert');

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('leadName');
      const phoneInput = document.getElementById('leadPhone');
      const emailInput = document.getElementById('leadEmail');

      if (!leadForm.checkValidity()) {
        leadForm.classList.add('was-validated');
        return;
      }

      // Simulate successful frontend submission
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Đang xử lý...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;

        if (formFeedback) {
          formFeedback.classList.remove('d-none');
          formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        leadForm.reset();
        leadForm.classList.remove('was-validated');

        // Auto-hide alert after 8 seconds
        setTimeout(() => {
          if (formFeedback) {
            formFeedback.classList.add('d-none');
          }
        }, 8000);
      }, 700);
    });
  }
});

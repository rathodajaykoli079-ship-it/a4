// ExoticPurseAsh Interactive Atelier Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer Toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeBtn = document.getElementById('drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');

  function openDrawer() {
    if (drawer && overlay) {
      drawer.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawer && overlay) {
      drawer.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Accordion Logic
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close other active items
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Bespoke Inquiry Form Feedback
  const forms = document.querySelectorAll('form[data-atelier-form]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Verifying Specifications &bull; Reserving Leather...';
      setTimeout(() => {
        alert('Thank you for your bespoke purse inquiry with ExoticPurseAsh. A master artisan has received your commission details and will reach out with hide swatches and build timelines within 24 hours.');
        form.reset();
        btn.disabled = false;
        btn.innerHTML = origText;
      }, 900);
    });
  });
});

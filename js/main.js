document.addEventListener('DOMContentLoaded', function() {
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  const pageMapping = {
    'index.html': 'Inicio',
    'quienes-somos.html': 'Quienes somos',
    'blog.html': 'Blog',
    'revista-digital.html': 'Revista digital',
    'herramientas-digitales.html': 'Herramientas digitales',
    'aplicaciones-apoyo.html': 'Aplicaciones de apoyo',
    'Cursos de capacitación.html': 'Cursos de capacitación',
    'canal-CREA.html': 'Canal CREA',
    'podcast.html': 'Podcast',
    'IASapoyo.html': 'IAs de apoyo',
    'Entrena-mente.html': 'Entrena tu mente'
  };
  
  const buttons = document.querySelectorAll('.btn-ciij');
  buttons.forEach(btn => {
    const btnText = btn.innerText.trim();
    const expectedText = pageMapping[currentPage];
    if (expectedText && btnText === expectedText) {
      btn.classList.add('btn-active');
    }
  });
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.card, .testi-card, .hero-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
  
  console.log('Centro CIIJ - Per aspera ad astra');
});

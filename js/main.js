// ============================================
// CENTRO CIIJ - INTERACCIONES PROFESIONALES
// Efectos modernos y rendimiento optimizado
// ============================================

// Detectar página activa y marcar botón
document.addEventListener('DOMContentLoaded', function() {
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  const pageMapping = {
    'index.html': '🏠 Inicio',
    'quienes-somos.html': '👥 Quienes somos',
    'blog.html': '📝 Blog',
    'revista-digital.html': '📘 Revista digital',
    'herramientas-digitales.html': '🛠️ Herramientas digitales',
    'aplicaciones-apoyo.html': '📱 Aplicaciones de apoyo',
    'cursos-capacitacion.html': '🎓 Cursos de capacitación',
    'canal-crea.html': '🎬 Canal CREA',
    'podcast.html': '🎙️ Podcast',
    'ias-apoyo.html': '🤖 IAs de apoyo',
    'entrena-mente.html': '🧠 Entrena tu mente'
  };
  
  const buttons = document.querySelectorAll('.btn-ciij');
  buttons.forEach(btn => {
    const btnText = btn.innerText.trim();
    const expectedText = pageMapping[currentPage];
    
    if (expectedText && btnText === expectedText) {
      btn.classList.add('btn-active');
    }
  });
  
  // Efecto de scroll suave para anclas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  
  // Intersection Observer para animaciones al hacer scroll
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
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Efecto parallax sutil en hero
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
  });
  
  // Consola elegante
  console.log('%c✨ Centro CIIJ ✨', 'color: #c9a03d; font-size: 18px; font-weight: bold;');
  console.log('%cPer aspera ad astra', 'color: #2d4a2c; font-size: 14px; font-style: italic;');
  
  // Tooltip sutil para botones
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      const tooltip = document.createElement('div');
      tooltip.className = 'custom-tooltip';
      tooltip.innerText = `Ir a ${btn.innerText.replace(/[🏠👥📝📘🛠️📱🎓🎬🎙️🤖🧠]/g, '').trim()}`;
      tooltip.style.cssText = `
        position: fixed;
        background: var(--primary-dark);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        pointer-events: none;
        z-index: 10000;
        white-space: nowrap;
        font-family: 'Inter', sans-serif;
        transition: opacity 0.2s;
      `;
      document.body.appendChild(tooltip);
      
      const updateTooltip = (event) => {
        tooltip.style.left = `${event.clientX + 15}px`;
        tooltip.style.top = `${event.clientY - 30}px`;
      };
      
      updateTooltip(e);
      
      const moveHandler = (moveEvent) => updateTooltip(moveEvent);
      window.addEventListener('mousemove', moveHandler);
      
      btn.addEventListener('mouseleave', () => {
        tooltip.remove();
        window.removeEventListener('mousemove', moveHandler);
      }, { once: true });
    });
  });
});

// Notificaciones toast elegantes
window.showToast = function(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'ciij-toast';
  const colors = {
    success: '#2d4a2c',
    error: '#c0392b',
    info: '#c9a03d'
  };
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: ${colors[type]};
    color: white;
    padding: 12px 24px;
    border-radius: 48px;
    font-size: 14px;
    font-weight: 500;
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    font-family: 'Inter', sans-serif;
  `;
  toast.innerText = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Añadir estilos de animación para toasts
const toastStyles = document.createElement('style');
toastStyles.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(toastStyles);

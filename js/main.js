// ============================================
// JS COMPARTIDO - Centro CIIJ
// Funcionalidades globales
// ============================================

// Detectar qué página está activa y marcar el botón correspondiente
document.addEventListener('DOMContentLoaded', function() {
  
  // Obtener el nombre del archivo actual
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Mapeo de páginas a textos de botones (para resaltar)
  const pageToButtonText = {
    'index.html': 'Inicio',
    'quienes-somos.html': 'Quienes somos',
    'blog.html': 'Blog',
    'revista-digital.html': 'Revista digital',
    'herramientas-digitales.html': 'Herramientas digitales',
    'aplicaciones-apoyo.html': 'Aplicaciones de apoyo',
    'cursos-capacitacion.html': 'Cursos de capacitación',
    'canal-crea.html': 'Canal CREA',
    'podcast.html': 'Podcast',
    'ias-apoyo.html': 'IAs de apoyo',
    'entrena-mente.html': 'Entrena tu mente'
  };
  
  // Buscar el botón que corresponde a la página actual y resaltarlo
  const buttons = document.querySelectorAll('.btn-ciij');
  buttons.forEach(btn => {
    const btnText = btn.innerText.trim().replace(/^[📝📘🛠️📱🎓🎬🎙️🤖🧠👥]+\s*/, ''); // Remove emojis
    const expectedText = pageToButtonText[currentPage];
    
    if (expectedText && btnText === expectedText) {
      btn.classList.add('btn-active');
    }
    
    // Si es index.html y el botón dice "Inicio" (lo agregaremos manualmente)
    if (currentPage === 'index.html' && btnText === 'Inicio') {
      btn.classList.add('btn-active');
    }
  });
  
  // Smooth scroll para enlaces internos (si los hay)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Pequeña animación de bienvenida en consola
  console.log('%c✨ Centro CIIJ - Per aspera ad astra ✨', 'color: #b68b40; font-size: 16px; font-weight: bold;');
  console.log('Bienvenido al Centro de innovación e investigación Juventud');
});

// Función para carga dinámica (opcional)
function loadContent(page) {
  console.log(`Cargando contenido de: ${page}`);
  // Aquí podrías implementar AJAX si lo necesitas
}

// Detectar si hay algún mensaje de alerta para mostrar
window.showNotification = function(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = type === 'error' ? '#dc3545' : '#2c3e2f';
  notification.style.color = 'white';
  notification.style.padding = '12px 24px';
  notification.style.borderRadius = '8px';
  notification.style.zIndex = '9999';
  notification.style.fontSize = '14px';
  notification.innerText = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
};

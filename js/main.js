// ============================================
// CENTRO CIIJ - DETECCIÓN DE DISPOSITIVO
// Responsive + Interacciones
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== DETECCIÓN DE DISPOSITIVO =====
  const detectDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const width = window.innerWidth;
    
    let device = 'desktop';
    let os = 'unknown';
    
    // Detectar sistema operativo
    if (userAgent.indexOf('win') > -1) os = 'Windows';
    else if (userAgent.indexOf('mac') > -1) os = 'MacOS';
    else if (userAgent.indexOf('linux') > -1) os = 'Linux';
    else if (userAgent.indexOf('android') > -1) os = 'Android';
    else if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1) os = 'iOS';
    
    // Detectar tipo de dispositivo por ancho
    if (width <= 480) device = 'mobile';
    else if (width <= 1024) device = 'tablet';
    else device = 'desktop';
    
    // Detectar touch
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    return { device, os, isTouch, width };
  };
  
  const deviceInfo = detectDevice();
  
  // Mostrar en consola (útil para debugging)
  console.log(`📱 Dispositivo detectado: ${deviceInfo.device.toUpperCase()}`);
  console.log(`💻 Sistema operativo: ${deviceInfo.os}`);
  console.log(`📏 Ancho de pantalla: ${deviceInfo.width}px`);
  console.log(`👆 Touch soportado: ${deviceInfo.isTouch ? 'Sí' : 'No'}`);
  console.log(`🚀 Centro CIIJ - "Si puedes imaginarlo, puedes construirlo"`);
  
  // Ajustes específicos por dispositivo (opcional)
  if (deviceInfo.device === 'mobile') {
    document.body.classList.add('is-mobile');
    // Puedes agregar comportamientos específicos para móvil aquí
  } else if (deviceInfo.device === 'tablet') {
    document.body.classList.add('is-tablet');
  } else {
    document.body.classList.add('is-desktop');
  }
  
  // ===== RESALTAR BOTÓN ACTIVO =====
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
  
  // ===== ANIMACIONES AL HACER SCROLL =====
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
  
  document.querySelectorAll('.card, .testi-card, .frase-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
  
  // ===== REDIMENSIÓN: actualizar detección =====
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      const newDeviceInfo = detectDevice();
      console.log(`🔄 Dispositivo actualizado: ${newDeviceInfo.device} (${newDeviceInfo.width}px)`);
      
      // Actualizar clases del body
      document.body.classList.remove('is-mobile', 'is-tablet', 'is-desktop');
      if (newDeviceInfo.device === 'mobile') document.body.classList.add('is-mobile');
      else if (newDeviceInfo.device === 'tablet') document.body.classList.add('is-tablet');
      else document.body.classList.add('is-desktop');
    }, 250);
  });
});

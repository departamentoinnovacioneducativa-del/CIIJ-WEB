// ============================================
// CENTRO CIIJ - BANNER ROTATORIO DE FRASES
// Detección de dispositivo + Animaciones
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== BANNER ROTATORIO DE FRASES =====
  const frases = [
    { texto: '"La mejor manera de predecir el futuro es creándolo"', autor: "Peter Drucker" },
    { texto: '"No tengas miedo de renunciar a lo bueno para ir por lo grandioso"', autor: "John D. Rockefeller" },
    { texto: '"La creatividad es la inteligencia divirtiéndose"', autor: "Albert Einstein" },
    { texto: '"La tecnología es solo una herramienta. Lo importante es tener fe en las personas"', autor: "Steve Jobs" },
    { texto: '"El futuro pertenece a quienes creen en la belleza de sus sueños"', autor: "Eleanor Roosevelt" },
    { texto: '"La imaginación es el principio de la creación"', autor: "George Bernard Shaw" },
    { texto: '"No hay personas con y sin creatividad, solo personas con diferentes tipos de mentes"', autor: "Ken Robinson" },
    { texto: '"El único límite para tus logros es tu propia imaginación"', autor: "Pablo Adrián Rivera Juvenal" },
    { texto: '"La innovación distingue entre un líder y un seguidor"', autor: "Steve Jobs" },
    { texto: '"Si puedes soñarlo, puedes hacerlo"', autor: "Walt Disney" },
    { texto: '"La creatividad requiere tomar riesgos"', autor: "Mihaly Csikszentmihalyi" },
    { texto: '"El arte de la innovación es encontrar lo que otros no ven"', autor: "Thomas Edison" }
  ];
  
  let indiceActual = 0;
  let tiempoRestante = 8; // 8 segundos por frase
  let intervalo;
  let barraIntervalo;
  
  const fraseElemento = document.getElementById('fraseRotante');
  const autorElemento = document.getElementById('autorRotante');
  const barraProgreso = document.getElementById('barraProgreso');
  
  function actualizarFrase() {
    // Animación de fade out/in
    if (fraseElemento && autorElemento) {
      fraseElemento.style.opacity = '0';
      autorElemento.style.opacity = '0';
      
      setTimeout(() => {
        const fraseActual = frases[indiceActual];
        fraseElemento.textContent = fraseActual.texto;
        autorElemento.textContent = `— ${fraseActual.autor}`;
        
        fraseElemento.style.opacity = '1';
        autorElemento.style.opacity = '1';
      }, 200);
    }
    
    // Reiniciar barra de progreso
    tiempoRestante = 8;
    actualizarBarra();
  }
  
  function actualizarBarra() {
    if (barraProgreso) {
      const porcentaje = (tiempoRestante / 8) * 100;
      barraProgreso.style.width = `${porcentaje}%`;
    }
  }
  
  function iniciarRotacion() {
    // Limpiar intervalos existentes
    if (intervalo) clearInterval(intervalo);
    if (barraIntervalo) clearInterval(barraIntervalo);
    
    // Intervalo para cambiar de frase
    intervalo = setInterval(() => {
      indiceActual = (indiceActual + 1) % frases.length;
      actualizarFrase();
    }, 8000);
    
    // Intervalo para la barra de progreso
    barraIntervalo = setInterval(() => {
      if (tiempoRestante > 0) {
        tiempoRestante -= 0.1;
        actualizarBarra();
      }
    }, 100);
  }
  
  // Iniciar rotación
  if (fraseElemento && autorElemento) {
    fraseElemento.style.transition = 'opacity 0.2s ease';
    autorElemento.style.transition = 'opacity 0.2s ease';
    actualizarFrase();
    iniciarRotacion();
  }
  
  // ===== DETECCIÓN DE DISPOSITIVO =====
  const detectDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const width = window.innerWidth;
    
    let device = 'desktop';
    let os = 'unknown';
    
    if (userAgent.indexOf('win') > -1) os = 'Windows';
    else if (userAgent.indexOf('mac') > -1) os = 'MacOS';
    else if (userAgent.indexOf('linux') > -1) os = 'Linux';
    else if (userAgent.indexOf('android') > -1) os = 'Android';
    else if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1) os = 'iOS';
    
    if (width <= 480) device = 'mobile';
    else if (width <= 1024) device = 'tablet';
    else device = 'desktop';
    
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    return { device, os, isTouch, width };
  };
  
  const deviceInfo = detectDevice();
  
  console.log(`🚀 Centro CIIJ - "Si puedes imaginarlo, puedes construirlo"`);
  console.log(`📱 Dispositivo: ${deviceInfo.device.toUpperCase()}`);
  console.log(`💻 OS: ${deviceInfo.os}`);
  console.log(`📏 Ancho: ${deviceInfo.width}px`);
  console.log(`👆 Touch: ${deviceInfo.isTouch ? 'Sí' : 'No'}`);
  
  // Añadir clase al body según dispositivo
  document.body.classList.add(`device-${deviceInfo.device}`);
  
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
  
  document.querySelectorAll('.card, .testi-card, .banner-rotatorio').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // ===== REDIMENSIÓN =====
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      const newDeviceInfo = detectDevice();
      console.log(`🔄 Dispositivo actualizado: ${newDeviceInfo.device} (${newDeviceInfo.width}px)`);
      
      document.body.classList.remove('device-desktop', 'device-tablet', 'device-mobile');
      document.body.classList.add(`device-${newDeviceInfo.device}`);
    }, 250);
  });
});

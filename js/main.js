// ============================================
// CENTRO CIIJ - BANNER ROTATORIO
// 50+ frases | 1 minuto por frase
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
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
    { texto: '"El arte de la innovación es encontrar lo que otros no ven"', autor: "Thomas Edison" },
    { texto: '"La curiosidad es el motor de la innovación"', autor: "Marie Curie" },
    { texto: '"El progreso es imposible sin cambio"', autor: "George Bernard Shaw" },
    { texto: '"La mejor forma de crear el futuro es diseñarlo"', autor: "Buckminster Fuller" },
    { texto: '"La innovación es ver lo que todos han visto y pensar lo que nadie ha pensado"', autor: "Albert Szent-Györgyi" },
    { texto: '"El genio es 1% inspiración y 99% transpiración"', autor: "Thomas Edison" },
    { texto: '"No sigas el camino, ve por donde no hay camino y deja huella"', autor: "Ralph Waldo Emerson" },
    { texto: '"La creatividad es contagiosa, pásala"', autor: "Albert Einstein" },
    { texto: '"El secreto de la innovación es empezar antes de estar listo"', autor: "Reid Hoffman" },
    { texto: '"La imaginación nos permite volar sin alas"', autor: "Albert Einstein" },
    { texto: '"El conocimiento es poder, la creatividad es superpoder"', autor: "Anónimo" },
    { texto: '"La mejor forma de predecir el futuro es inventarlo"', autor: "Alan Kay" },
    { texto: '"No tengas miedo de ser excéntrico en tus ideas"', autor: "Charles Darwin" },
    { texto: '"La pasión por crear es más importante que el talento"', autor: "Stephen King" },
    { texto: '"La creatividad requiere la valentía de soltar las certezas"', autor: "Erich Fromm" },
    { texto: '"La innovación es un cambio que añade valor"', autor: "Peter Drucker" },
    { texto: '"Piensa diferente, actúa diferente, sé diferente"', autor: "Steve Jobs" },
    { texto: '"La creatividad es la capacidad de ver conexiones donde otros no las ven"', autor: "Anónimo" },
    { texto: '"La imaginación es más importante que el conocimiento"', autor: "Albert Einstein" },
    { texto: '"Cada gran sueño comienza con un soñador"', autor: "Harriet Tubman" },
    { texto: '"El cambio es la ley de la vida"', autor: "John F. Kennedy" },
    { texto: '"La innovación surge de la insatisfacción creativa"', autor: "Anónimo" },
    { texto: '"El futuro no está escrito, hay que escribirlo"', autor: "Anónimo" },
    { texto: '"La innovación es el corazón del progreso"', autor: "Anónimo" },
    { texto: '"La creatividad es la clave para la supervivencia en un mundo cambiante"', autor: "Anónimo" },
    { texto: '"El pensamiento creativo no es un talento, es una habilidad que se puede aprender"', autor: "Edward de Bono" },
    { texto: '"La mejor inversión es en ideas"', autor: "Anónimo" },
    { texto: '"La creatividad es la mayor expresión de libertad"', autor: "Anónimo" },
    { texto: '"El arte de crear es el arte de vivir"', autor: "Anónimo" },
    { texto: '"La imaginación no tiene límites, solo los que nosotros ponemos"', autor: "Anónimo" },
    { texto: '"Cada creación comienza con una chispa de locura"', autor: "Anónimo" },
    { texto: '"La ciencia es la poesía de la realidad"', autor: "Richard Dawkins" },
    { texto: '"La creatividad es ver lo que todos ven y pensar lo que nadie ha pensado"', autor: "Anónimo" }
  ];
  
  const TIEMPO_POR_FRASE = 60; // segundos
  
  let indiceActual = 0;
  let tiempoRestante = TIEMPO_POR_FRASE;
  let intervaloCambioFrase;
  let intervaloBarra;
  
  const fraseElemento = document.getElementById('fraseRotante');
  const autorElemento = document.getElementById('autorRotante');
  const progressBarFill = document.getElementById('progressBarFill');
  
  function actualizarFrase() {
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
    
    tiempoRestante = TIEMPO_POR_FRASE;
    actualizarBarra();
  }
  
  function actualizarBarra() {
    if (progressBarFill) {
      const porcentaje = (tiempoRestante / TIEMPO_POR_FRASE) * 100;
      progressBarFill.style.width = `${porcentaje}%`;
    }
  }
  
  function iniciarRotacion() {
    if (intervaloCambioFrase) clearInterval(intervaloCambioFrase);
    if (intervaloBarra) clearInterval(intervaloBarra);
    
    intervaloCambioFrase = setInterval(() => {
      indiceActual = (indiceActual + 1) % frases.length;
      actualizarFrase();
    }, TIEMPO_POR_FRASE * 1000);
    
    intervaloBarra = setInterval(() => {
      if (tiempoRestante > 0) {
        tiempoRestante -= 0.1;
        actualizarBarra();
      }
    }, 100);
  }
  
  if (fraseElemento && autorElemento) {
    fraseElemento.style.transition = 'opacity 0.2s ease';
    autorElemento.style.transition = 'opacity 0.2s ease';
    actualizarFrase();
    iniciarRotacion();
  }
  
  // Detectar página activa
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
  
  // Animaciones scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.card, .testi-card, .banner-rotatorio').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
  
  console.log('🚀 Centro CIIJ - "Si puedes imaginarlo, puedes construirlo"');
});

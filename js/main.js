// ============================================
// CENTRO CIIJ - BANNER ROTATORIO
// 50+ frases | 1 minuto por frase | Timer circular
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== 50+ FRASES DE INNOVADORES, GENIOS, CIENTÍFICOS, FILÓSOFOS, ARTISTAS =====
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
    { texto: '"La creatividad es la inteligencia pasándolo bien"', autor: "Anónimo" },
    { texto: '"La pasión por crear es más importante que el talento"', autor: "Stephen King" },
    { texto: '"El arte de la sabiduría es el arte de saber qué pasar por alto"', autor: "William James" },
    { texto: '"La curiosidad mató al gato, pero la satisfacción lo trajo de vuelta"', autor: "Proverbio irlandés" },
    { texto: '"La creatividad requiere la valentía de soltar las certezas"', autor: "Erich Fromm" },
    { texto: '"La innovación es un cambio que añade valor"', autor: "Peter Drucker" },
    { texto: '"Piensa diferente, actúa diferente, sé diferente"', autor: "Steve Jobs" },
    { texto: '"La creatividad es la capacidad de ver conexiones donde otros no las ven"', autor: "Anónimo" },
    { texto: '"El éxito nace del deseo de crear, no del miedo a fallar"', autor: "Anónimo" },
    { texto: '"La imaginación es más importante que el conocimiento"', autor: "Albert Einstein" },
    { texto: '"Cada gran sueño comienza con un soñador"', autor: "Harriet Tubman" },
    { texto: '"La creatividad es la inteligencia tomando riesgos"', autor: "Anónimo" },
    { texto: '"El cambio es la ley de la vida"', autor: "John F. Kennedy" },
    { texto: '"La innovación surge de la insatisfacción creativa"', autor: "Anónimo" },
    { texto: '"El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos"', autor: "Michael Jordan" },
    { texto: '"La creatividad es la capacidad de ver las cosas desde una nueva perspectiva"', autor: "Anónimo" },
    { texto: '"El futuro no está escrito, hay que escribirlo"', autor: "Anónimo" },
    { texto: '"La innovación es el corazón del progreso"', autor: "Anónimo" },
    { texto: '"La creatividad es la clave para la supervivencia en un mundo cambiante"', autor: "Anónimo" },
    { texto: '"El pensamiento creativo no es un talento, es una habilidad que se puede aprender"', autor: "Edward de Bono" },
    { texto: '"La mejor inversión es en ideas"', autor: "Anónimo" },
    { texto: '"La creatividad es la mayor expresión de libertad"', autor: "Anónimo" },
    { texto: '"El arte de crear es el arte de vivir"', autor: "Anónimo" },
    { texto: '"La imaginación no tiene límites, solo los que nosotros ponemos"', autor: "Anónimo" },
    { texto: '"Cada creación comienza con una chispa de locura"', autor: "Anónimo" }
  ];
  
  // ===== CONFIGURACIÓN: 1 MINUTO = 60 SEGUNDOS =====
  const TIEMPO_POR_FRASE = 60; // segundos
  
  let indiceActual = 0;
  let tiempoRestante = TIEMPO_POR_FRASE;
  let intervalo;
  let timerIntervalo;
  
  const fraseElemento = document.getElementById('fraseRotante');
  const autorElemento = document.getElementById('autorRotante');
  const timerProgress = document.getElementById('timerProgress');
  const timerText = document.getElementById('timerText');
  
  // Circunferencia del círculo (2 * pi * r) con r=27
  const circunferencia = 2 * Math.PI * 27; // ≈ 169.646
  
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
    
    // Reiniciar timer
    tiempoRestante = TIEMPO_POR_FRASE;
    actualizarTimerVisual();
  }
  
  function actualizarTimerVisual() {
    if (timerProgress) {
      const porcentaje = tiempoRestante

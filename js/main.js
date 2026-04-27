document.addEventListener('DOMContentLoaded', function() {
    
    const frases = [
        { texto: "La mejor manera de predecir el futuro es creándolo", autor: "Peter Drucker" },
        { texto: "No tengas miedo de renunciar a lo bueno para ir por lo grandioso", autor: "John D. Rockefeller" },
        { texto: "La creatividad es la inteligencia divirtiéndose", autor: "Albert Einstein" },
        { texto: "La tecnología es solo una herramienta. Lo importante es tener fe en las personas", autor: "Steve Jobs" },
        { texto: "El único límite para tus logros es tu propia imaginación", autor: "Pablo Adrián Rivera Juvenal" },
        { texto: "La innovación distingue entre un líder y un seguidor", autor: "Steve Jobs" },
        { texto: "La imaginación es más importante que el conocimiento", autor: "Albert Einstein" },
        { texto: "La ciencia es la poesía de la realidad", autor: "Richard Dawkins" }
        // ... (puedes seguir añadiendo el resto de tu lista aquí)
    ];

    const TIEMPO_POR_FRASE = 60; 
    let indiceActual = 0;
    let tiempoRestante = TIEMPO_POR_FRASE;
    
    const fraseElemento = document.getElementById('fraseRotante');
    const autorElemento = document.getElementById('autorRotante');
    const progressBarFill = document.getElementById('progressBarFill');

    function actualizarFrase() {
        if (!fraseElemento) return;
        
        fraseElemento.style.opacity = '0';
        autorElemento.style.opacity = '0';
        
        setTimeout(() => {
            const fraseActual = frases[indiceActual];
            fraseElemento.textContent = `"${fraseActual.texto}"`;
            autorElemento.textContent = `— ${fraseActual.autor}`;
            
            fraseElemento.style.opacity = '1';
            autorElemento.style.opacity = '1';
        }, 400);

        tiempoRestante = TIEMPO_POR_FRASE;
    }

    function iniciarCiclo() {
        setInterval(() => {
            if (tiempoRestante <= 0) {
                indiceActual = (indiceActual + 1) % frases.length;
                actualizarFrase();
            } else {
                tiempoRestante -= 0.1;
                const porcentaje = (tiempoRestante / TIEMPO_POR_FRASE) * 100;
                if (progressBarFill) progressBarFill.style.width = `${porcentaje}%`;
            }
        }, 100);
    }

    // Navegación Activa
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.btn-ciij').forEach(btn => {
        if (btn.getAttribute('href') === currentPage) {
            btn.classList.add('btn-active');
        }
    });

    // Intersection Observer para animaciones elegantes
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .testi-card, .banner-rotatorio, .hero-text').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        observer.observe(el);
    });

    // Clase helper para el observer
    document.styleSheets[0].insertRule('.visible { opacity: 1 !important; transform: translateY(0) !important; }', 0);

    actualizarFrase();
    iniciarCiclo();
});

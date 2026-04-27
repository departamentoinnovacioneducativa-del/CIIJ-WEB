document.addEventListener('DOMContentLoaded', () => {
    // 1. Datos del Rotador de Frases
    const frases = [
        { t: "La mejor manera de predecir el futuro es creándolo", a: "Peter Drucker" },
        { t: "Si puedes imaginarlo, puedes construirlo", a: "Pablo Adrián Rivera Juvenal" },
        { t: "La creatividad es la inteligencia divirtiéndose", a: "Albert Einstein" },
        { t: "La innovación distingue entre un líder y un seguidor", a: "Steve Jobs" },
        { t: "Hacer siempre y en todo lo mejor", a: "Lema CIIJ" }
    ];

    let indiceFrase = 0;
    const fraseTexto = document.getElementById('fraseRotante');
    const fraseAutor = document.getElementById('autorRotante');
    const barraProgreso = document.getElementById('progressBarFill');
    const tiempoRotacion = 60000; // 60 segundos

    function actualizarFrase() {
        if (!fraseTexto) return;
        
        // Efecto de desvanecimiento
        fraseTexto.style.opacity = 0;
        fraseAutor.style.opacity = 0;

        setTimeout(() => {
            fraseTexto.textContent = `"${frases[indiceFrase].t}"`;
            fraseAutor.textContent = `— ${frases[indiceFrase].a}`;
            
            fraseTexto.style.opacity = 1;
            fraseAutor.style.opacity = 1;

            // Reiniciar animación de barra
            barraProgreso.style.transition = 'none';
            barraProgreso.style.width = '100%';
            
            // Forzar reflow para que el navegador note el cambio de 'none'
            void barraProgreso.offsetWidth; 

            barraProgreso.style.transition = `width ${tiempoRotacion}ms linear`;
            barraProgreso.style.width = '0%';

            indiceFrase = (indiceFrase + 1) % frases.length;
        }, 500);
    }

    // 2. Marcar Link Activo en Nav
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            // Centrar el item activo en móvil
            link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });

    // 3. Manejo de desplazamiento lateral (Drag con mouse para PC)
    const setupScrollDrag = (selector) => {
        const slider = document.querySelector(selector);
        if (!slider) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'default';
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'default';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; 
            slider.scrollLeft = scrollLeft - walk;
        });
    };

    // Inicializar funciones
    if (fraseTexto) {
        fraseTexto.style.transition = 'opacity 0.5s ease';
        fraseAutor.style.transition = 'opacity 0.5s ease';
        actualizarFrase();
        setInterval(actualizarFrase, tiempoRotacion);
    }

    setupScrollDrag('#projects-scroll');
    setupScrollDrag('#history-scroll');
});

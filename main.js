document.addEventListener('DOMContentLoaded', () => {
    // 1. Datos del Rotador de Frases (Contenido Intacto)
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
    const tiempoRotacion = 60000; // 60s

    function actualizarFrase() {
        if (!fraseTexto) return;
        
        fraseTexto.style.opacity = 0;
        fraseAutor.style.opacity = 0;
        fraseTexto.style.transform = 'translateY(10px)';
        fraseAutor.style.transform = 'translateY(10px)';

        setTimeout(() => {
            fraseTexto.textContent = `"${frases[indiceFrase].t}"`;
            fraseAutor.textContent = `— ${frases[indiceFrase].a}`;
            
            fraseTexto.style.opacity = 1;
            fraseAutor.style.opacity = 1;
            fraseTexto.style.transform = 'translateY(0)';
            fraseAutor.style.transform = 'translateY(0)';

            barraProgreso.style.transition = 'none';
            barraProgreso.style.width = '100%';
            
            void barraProgreso.offsetWidth; 

            barraProgreso.style.transition = `width ${tiempoRotacion}ms linear`;
            barraProgreso.style.width = '0%';

            indiceFrase = (indiceFrase + 1) % frases.length;
        }, 600); // Ligeramente más tiempo para una transición más suave
    }

    // 2. Marcar Link Activo
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            // Centrado suave en la barra de navegación móvil
            setTimeout(() => {
                link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }, 100);
        }
    });

    // 3. Arrastre de PC (Optimizado)
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

        slider.addEventListener('mouseleave', () => { isDown = false; slider.style.cursor = 'grab'; });
        slider.addEventListener('mouseup', () => { isDown = false; slider.style.cursor = 'grab'; });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2.5; // Velocidad de arrastre ajustada
            slider.scrollLeft = scrollLeft - walk;
        });
        
        slider.style.cursor = 'grab';
    };

    // Inicialización
    if (fraseTexto) {
        fraseTexto.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        fraseAutor.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        actualizarFrase();
        setInterval(actualizarFrase, tiempoRotacion);
    }

    setupScrollDrag('#projects-scroll');
    setupScrollDrag('#history-scroll');
});

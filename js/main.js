document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        { t: "La mejor manera de predecir el futuro es creándolo", a: "Peter Drucker" },
        { t: "Si puedes imaginarlo, puedes construirlo", a: "Pablo Adrián Rivera Juvenal" },
        { t: "La creatividad es la inteligencia divirtiéndose", a: "Albert Einstein" }
    ];

    let i = 0;
    const fEl = document.getElementById('fraseRotante');
    const aEl = document.getElementById('autorRotante');
    const pEl = document.getElementById('progressBarFill');
    const duracion = 60000; // 60 segundos

    function rotar() {
        if(!fEl) return;
        
        fEl.style.opacity = 0;
        aEl.style.opacity = 0;

        setTimeout(() => {
            fEl.textContent = `"${frases[i].t}"`;
            aEl.textContent = `— ${frases[i].a}`;
            fEl.style.opacity = 1;
            aEl.style.opacity = 1;
            
            // Reiniciar barra
            pEl.style.transition = 'none';
            pEl.style.width = '100%';
            
            setTimeout(() => {
                pEl.style.transition = `width ${duracion}ms linear`;
                pEl.style.width = '0%';
            }, 50);

            i = (i + 1) % frases.length;
        }, 500);
    }

    // Página Activa
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(link => {
        if(link.getAttribute('href') === path) {
            link.classList.add('active');
            link.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    });

    rotar();
    setInterval(rotar, duracion);
});

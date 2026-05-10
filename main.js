document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        { t: "La innovación distingue a los líderes de los seguidores.", a: "Steve Jobs" },
        { t: "Hacer siempre y en todo lo mejor.", a: "Principio Vilasecano" },
        { t: "Si puedes imaginarlo, puedes construirlo.", a: "Walt Disney" }
        { t: "Construirse es construir el mundo.", a: "Pabo Adrian Rivera Juvenal" }
    ];

    let i = 0;
    const fTexto = document.getElementById('fraseRotante');
    const fAutor = document.getElementById('autorRotante');
    const bProgreso = document.getElementById('progressBarFill');

    function rotar() {
        if (!fTexto) return;
        fTexto.style.opacity = 0;
        setTimeout(() => {
            fTexto.textContent = `"${frases[i].t}"`;
            fAutor.textContent = `— ${frases[i].a}`;
            fTexto.style.opacity = 1;
            
            bProgreso.style.transition = 'none';
            bProgreso.style.width = '0%';
            void bProgreso.offsetWidth;
            bProgreso.style.transition = 'width 10000ms linear';
            bProgreso.style.width = '100%';

            i = (i + 1) % frases.length;
        }, 500);
    }

    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.getAttribute('href') === path) link.classList.add('active');
    });

    rotar();
    setInterval(rotar, 10000);
});

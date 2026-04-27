document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        { t: "La innovación es lo que distingue a los líderes de los seguidores.", a: "Steve Jobs" },
        { t: "Hacer siempre y en todo lo mejor.", a: "Lema CIIJ" },
        { t: "La educación es el arma más poderosa para cambiar el mundo.", a: "Nelson Mandela" },
        { t: "Si puedes imaginarlo, puedes construirlo.", a: "Pablo Adrián Rivera Juvenal" }
    ];

    let i = 0;
    const fTexto = document.getElementById('fraseRotante');
    const fAutor = document.getElementById('autorRotante');
    const bProgreso = document.getElementById('progressBarFill');
    const tiempo = 15000; // 15 segundos para lectura cómoda

    function rotar() {
        if (!fTexto) return;
        fTexto.style.opacity = 0;
        fAutor.style.opacity = 0;

        setTimeout(() => {
            fTexto.textContent = `"${frases[i].t}"`;
            fAutor.textContent = `— ${frases[i].a}`;
            fTexto.style.opacity = 1;
            fAutor.style.opacity = 1;

            bProgreso.style.transition = 'none';
            bProgreso.style.width = '0%';
            void bProgreso.offsetWidth; 

            bProgreso.style.transition = `width ${tiempo}ms linear`;
            bProgreso.style.width = '100%';

            i = (i + 1) % frases.length;
        }, 500);
    }

    // Marcar item activo
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.getAttribute('href') === path) link.classList.add('active');
    });

    if (fTexto) {
        fTexto.style.transition = 'opacity 0.5s ease';
        fAutor.style.transition = 'opacity 0.5s ease';
        rotar();
        setInterval(rotar, tiempo);
    }
});

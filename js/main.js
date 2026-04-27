document.addEventListener('DOMContentLoaded', function() {
    // 1. Lógica de Navegación Activa
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        // Obtenemos el nombre del archivo del atributo href
        const itemHref = item.getAttribute('href');
        
        if (itemHref === currentPage) {
            item.classList.add('active');
            // En móvil, hace que el botón activo se centre automáticamente al cargar
            item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });

    // 2. Lógica del Banner (simplificada y limpia)
    const frases = [
        { texto: "La mejor manera de predecir el futuro es creándolo", autor: "Peter Drucker" },
        { texto: "Si puedes imaginarlo, puedes construirlo", autor: "Pablo Adrián Rivera Juvenal" },
        { texto: "La creatividad es la inteligencia divirtiéndose", autor: "Albert Einstein" }
    ];

    let indice = 0;
    const txtFrase = document.getElementById('fraseRotante');
    const txtAutor = document.getElementById('autorRotante');
    const fill = document.getElementById('progressBarFill');

    function cambiarContenido() {
        if(!txtFrase) return;
        
        txtFrase.style.opacity = 0;
        txtAutor.style.opacity = 0;

        setTimeout(() => {
            txtFrase.textContent = `"${frases[indice].texto}"`;
            txtAutor.textContent = `— ${frases[indice].autor}`;
            txtFrase.style.opacity = 1;
            txtAutor.style.opacity = 1;
            
            // Reiniciar barra
            fill.style.transition = 'none';
            fill.style.width = '100%';
            
            // Animación de la barra (60 segundos)
            setTimeout(() => {
                fill.style.transition = 'width 60s linear';
                fill.style.width = '0%';
            }, 50);

            indice = (indice + 1) % frases.length;
        }, 500);
    }

    // Configuración inicial de transiciones
    if(txtFrase) {
        txtFrase.style.transition = 'opacity 0.5s ease';
        txtAutor.style.transition = 'opacity 0.5s ease';
        cambiarContenido();
        setInterval(cambiarContenido, 60000); // 60 segundos
    }
});

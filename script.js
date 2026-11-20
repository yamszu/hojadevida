const elementos = document.querySelectorAll(
    'section .card, section h2, #inicio .row'
);

// Agregamos la clase de animación

elementos.forEach(elemento => {
    elemento.classList.add('aparecer');
});

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add('visible');

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach(elemento => {
    observador.observe(elemento);
});

const enlaces = document.querySelectorAll('.nav-link');

enlaces.forEach(enlace => {

    enlace.addEventListener('click', function(event) {

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Cerramos el menú en dispositivos móviles

            const menu = document.querySelector('#menu');

            if (menu && menu.classList.contains('show')) {

                const boton = document.querySelector('.navbar-toggler');

                if (boton) {
                    boton.click();
                }

            }

        }

    });

});

const secciones = document.querySelectorAll('main section[id]');

window.addEventListener('scroll', () => {

    let seccionActual = '';

    secciones.forEach(seccion => {

        const posicion = seccion.offsetTop - 150;

        if (window.scrollY >= posicion) {
            seccionActual = seccion.getAttribute('id');
        }

    });

    enlaces.forEach(enlace => {

        enlace.classList.remove('active');

        if (enlace.getAttribute('href') === '#' + seccionActual) {
            enlace.classList.add('active');
        }

    });

});

/* Variable para acceder las secciones con la clase "hidden" */

const seccionesOcultas = document.querySelectorAll('.hidden');


/* El Observer*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        entry.target.classList.toggle('mostrar', entry.isIntersecting);
        // if(entry.isIntersecting) observer.unobserve(entry.target);        
    });
},

{threshold: 0.8}


);



seccionesOcultas.forEach((seccion)=>observer.observe(seccion));
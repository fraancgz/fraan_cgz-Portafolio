document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DE NAVEGACIÓN (NAV LINKS) ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('header, section');

    function updateNav() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateNav);
    updateNav(); // Ejecución inicial para marcar donde empezamos


    // --- LÓGICA DE REVELADO DIRECCIONAL (REVEAL) ---
    const observerOptions = {
    threshold: 0.4, // Ahora sí se verá el efecto con fuerza
    // rootMargin: el primer valor es el top, el tercero es el bottom.
    // "-10% 0px -10% 0px" crea una faja central de detección
    rootMargin: "-50px 0px -50px 0px" 
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

const elementsToReveal = document.querySelectorAll('.reveal');
elementsToReveal.forEach(el => revealObserver.observe(el));
});
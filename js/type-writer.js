function startTypewriter(elementId, text, speed = 100) {
    const target = document.getElementById(elementId);
    let i = 0;

    function type() {
        if (target && i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Cuando cargue el DOM, disparo el que necesite
document.addEventListener('DOMContentLoaded', () => {
    // El del Hero
    startTypewriter("typewriter-hero", "Futuro Digital", 150);
    
    // Quizás uno en el sobre mí o donde quieras
    startTypewriter("typewriter-footer", "Gracias por visitar.", 100);
});
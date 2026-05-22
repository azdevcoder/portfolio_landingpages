// Inicializar animações AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: true, // A animação ocorre apenas uma vez
        offset: 50, // Inicia a animação 50px antes do elemento
        duration: 800, // Duração da animação em ms
        easing: 'ease-out-cubic',
    });
});

// Efeito de blur/background no Navbar ao scrollar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-lg', 'border-b', 'border-white/10');
        navbar.classList.remove('border-transparent');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

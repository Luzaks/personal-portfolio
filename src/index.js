import anime from 'animejs/lib/anime.es.js';
import rallax from 'rallax.js';
import AOS from 'aos';
import lax from 'lax.js'

anime({
    targets: '.dev-u',
    rotate: '1turn',
    duration: 800,
    scale: 1.1,
});

anime({
    targets: '.half-background',
    border: '100%', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
});

const target = document.querySelector('.parallax');

const parallax = rallax(target, { speed: 0.5 });
parallax.when(
    () => window.scrollY > 1000,
    () => parallax.stop()
).when(
    () => window.scrollY < 1000,
    () => parallax.start()
);

AOS.init();

window.onload = function() {
    lax.setup();

    const updateLax = () => {
        lax.update(window.scrollY);
        window.requestAnimationFrame(updateLax)
    };

    window.requestAnimationFrame(updateLax)
};
import rallax from 'rallax.js';
import AOS from 'aos';
import lax from 'lax.js'


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
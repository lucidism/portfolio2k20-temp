// const p5 = require("p5");
import sketch from './Sketch';
import tweens from './tweens';

window.addEventListener("load", () => {
    anime({
        targets: tweens,
        fadeIn: 1,
        duration: 2000,
        easing: 'linear',
        delay: 1000
    });

    new p5(sketch);
});
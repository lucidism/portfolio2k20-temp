// const p5 = require("p5");
import emitter from 'tiny-emitter/instance';
import sketch from './Sketch';
import Content from './Content';
import Footer from './Footer';
import AutoTitle from './AutoTitle';

const autoTitle = new AutoTitle();

window.addEventListener("load", () => {
    const content = new Content();
    const footer  = new Footer();
    const sk = new p5(sketch);

    emitter.on("play-footer", ::footer.display);

    setTimeout(() => {
        document.body.classList.remove('hidden');
        content.display();
    }, 200);
});
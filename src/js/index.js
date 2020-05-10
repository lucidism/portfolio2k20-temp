// const p5 = require("p5");
import sketch from './Sketch';
import Content from './Content';
import Footer from './Footer';

window.addEventListener("load", () => {
    const content = new Content();
    const footer  = new Footer();
    const sk = new p5(sketch);

    setTimeout(() => {
        document.body.classList.remove('hidden');
        content.display();
        footer.display();
    }, 200);
});
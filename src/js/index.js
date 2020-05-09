// const p5 = require("p5");
import sketch from './Sketch';
import Content from './Content';
import Footer from './Footer';

window.addEventListener("load", () => {
    const content = new Content();
    new p5(sketch);

    setTimeout(() => content.play(), 200);
});
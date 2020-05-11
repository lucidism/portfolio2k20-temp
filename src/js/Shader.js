import GlslCanvas from 'glslCanvas/dist/GlslCanvas.es';
import vertexString from '../assets/bg.vert';
import fragmentString from '../assets/bg.frag';

import tweens from './tweens';

class Shader {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("data-fullscreen", "1");
        this.canvas.setAttribute("width", window.innerWidth);
        this.canvas.setAttribute("height", window.innerHeight);
        document.body.appendChild(this.canvas);

        this.gl = new GlslCanvas(this.canvas, { vertexString, fragmentString });

        // start RAF
        this.update();
    }

    update() {
        this.gl.setUniform('u_fadein', tweens.fadeIn);

        requestAnimationFrame(::this.update);
    }
}

export default Shader;
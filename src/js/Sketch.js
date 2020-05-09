import Rectangle from './components/Rectangle';
import tweens from './tweens';

const sketch = (p) => {
    let bgShader;
    let tileSize, cols, rows;
    let rects = [];

    p.preload = () => {
        bgShader = p.loadShader('assets/shader/bg.vert', 'assets/shader/bg.frag');
    };

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

        tileSize = 30;
        cols = Math.round(p.width / tileSize);
        rows = Math.round(p.height / tileSize);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                // rects[j+(i*rows)] = new Rectangle(i, j, cols, rows, p);
            }
        }
    };

    p.draw = () => {
        p.background(0);

        // draw background layer
        bgShader.setUniform("u_resolution", [p.width, p.height]);
        bgShader.setUniform("u_time", p.millis() / 1000.0);
        bgShader.setUniform("u_fadein", tweens.fadeIn);
        p.shader(bgShader);
        p.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

export default sketch;
let cols, rows, tileSize;
let rects = [];
let mouse;
let bgShader, bg;
let tweens = {
    fadeIn: 0
};

window.addEventListener("load", () => {
    anime({
        targets: tweens,
        fadeIn: 1,
        duration: 2000,
        easing: 'linear',
        delay: 1000
    });
});

function preload() {
    bgShader = loadShader('assets/shader/bg.vert', 'assets/shader/bg.frag');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    bg = createGraphics(windowWidth, windowHeight, WEBGL);
    bg.canvas.remove();

    // create mouse object
    mouse = new Mouse();

    tileSize = 30;
    cols = round(width / tileSize);
    rows = round(height / tileSize);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            rects[j+(i*rows)] = new Rectangle(i, j, cols, rows);
        }
    }
}

function draw() {
    background(0);

    // draw background layer
    bgShader.setUniform("u_resolution", [width, height]);
    bgShader.setUniform("u_time", millis() / 1000.0);
    bgShader.setUniform("u_fadein", tweens.fadeIn);
    shader(bgShader);
    quad(-1, -1, 1, -1, 1, 1, -1, 1);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    let newBG = createGraphics(windowWidth, windowHeight, WEBGL);
    newBG.canvas.remove();
    newBG.image(bg, 0, 0, newBG.width, newBG.height);
    bg = newBG;
}

class Rectangle {
    constructor(i, j, cols, rows) {
        this.i = i;
        this.j = j;
        this.cols = cols;
        this.rows = rows;

        this.whiteOpacity = 0;
        this.isMouseHit = false;

        this.calcDimensions();
    }

    calcDimensions() {
        this.width = width/this.cols;
        this.height = height/this.rows;
        this.pos = createVector(this.i * this.width, this.j * this.height);
        this.diag = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }

    display() {
        // animate
        let newMouseHit = this.checkMouseCollision();
        if (newMouseHit !== this.isMouseHit) {
            // enable trail out
            if (newMouseHit) {
                anime({
                    targets: this,
                    whiteOpacity: [1, 0],
                    easing: 'linear',
                    duration: 1000,
                });
            }
        }
        this.isMouseHit = newMouseHit;

        let colorFan = 20;

        colorMode(HSB, 100);
        let c = color(millis()/200%100, 80, 80, 0);
        colorMode(RGB, 255);

        let blackFan = map(sin((0.1 * (this.i + (this.j * map(cos(millis() / 1000), -1, 1, 0.2, 2)))) - (millis() / 250)), 0, 1, 0, 60);

        fill(c, 0);
        // fill(0, blackFan);
        noStroke();

        rect(this.pos.x, this.pos.y, this.width, this.height);
    }

    checkMouseCollision() {
        let mousePos = mouse.getPos();
        return mousePos.x > this.pos.x && mousePos.x < this.pos.x + this.width && mousePos.y > this.pos.y && mousePos.y < this.pos.y + this.height;
    }

    checkMouseProximity(coeff) {
        return Math.max(0, map(
            this.pos.copy().add(createVector(this.width/2, this.height/2)).dist(mouse.getSmoothPos()),
            0, this.diag * coeff, 1, 0
        ));
    }

    resize(i, j, cols, rows) {
        this.i = i;
        this.j = j;
        this.cols = cols;
        this.rows = rows;

        this.calcDimensions();
    }
}

class Mouse {
    constructor() {
        this.pos = createVector(width/2, height/2);
        this.smoothPos = this.pos.copy();
        this.vel = 0;

        this.posEasing = 0.07;  // TO TRY: dynamic easing?
        this.velEasing = 0.11;
    }

    update() {
        // calculate eased mouse position
        let newSmoothPos = this.smoothPos.copy().add(this.pos.copy().sub(this.smoothPos).mult(this.posEasing));
        let newPos = createVector(mouseX, mouseY);
        // calculate velocity
        let newVel = this.pos.dist(newPos);
        this.vel += (newVel - this.vel) * this.velEasing;

        // update real-time mouse position
        this.smoothPos.set(newSmoothPos);
        this.pos.set(newPos);
    }

    // various getters
    getSmoothPos() { return this.smoothPos; }
    getPos() { return this.pos; }
    getVelocity() { return this.vel; }
}
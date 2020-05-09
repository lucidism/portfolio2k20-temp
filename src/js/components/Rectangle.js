class Rectangle {
    constructor(i, j, cols, rows, p) {
        this.i = i;
        this.j = j;
        this.cols = cols;
        this.rows = rows;
        this.p = p;

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

export default Rectangle;
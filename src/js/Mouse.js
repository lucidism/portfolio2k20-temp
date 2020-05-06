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

export default Mouse;
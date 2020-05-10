class AutoTitle {
    constructor() {
        this.i = 0;
        this.len = 10;
        this.startTime = new Date();

        this.update();
    }

    update() {
        this.i = Math.floor((new Date() - this.startTime) / 1000 * (1000 / 190));

        let s = "";
        for (let i = 0; i < this.len; i++) {
            s += Math.abs(this.i - i) % 4 !== 0 ? (Math.abs(this.i - i) % 4 === 2 ? '\u2593' : '\u2592' ) : '\u2591';
        }
        document.title = s;

        requestAnimationFrame(::this.update);
    }
}

export default AutoTitle;
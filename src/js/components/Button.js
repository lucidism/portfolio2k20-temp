import anime from 'animejs/lib/anime.es';

class Button {
    constructor(el) {
        this.el = el;
        this.border = null;
        this.backdrop = null;

        this.init();
    }

    init() {
        this.el.classList.add("hidden");

        // set text in subspan
        const subspan = document.createElement('span');
        subspan.classList.add("subtext");
        subspan.innerHTML = this.el.innerHTML;
        this.el.innerHTML = '';
        this.el.appendChild(subspan);

        // add backdrop
        this.backdrop = document.createElement('span');
        this.backdrop.classList.add('backdrop');
        this.el.appendChild(this.backdrop);

        // create timeline
        this.tl = anime.timeline({
            targets: this.backdrop,
            autoplay: false,
            loop: false,
            duration: 600,
            easing: 'easeInOutCirc'
        });

        this.tl.add({
            scaleX: [0, 1],
            complete: () => this.el.classList.remove("hidden")
        }).add({ scaleY: [1, 0] });
    }

    display() {
        this.tl.play();
    }
}

export default Button;
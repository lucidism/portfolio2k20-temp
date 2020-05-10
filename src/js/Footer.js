class Footer {
    constructor() {
        this.$el = document.querySelector('footer');
        this.h1 = this.$el.querySelector('h1');
        this.borders = this.$el.querySelectorAll('.borders > span');
        this.social = this.$el.querySelectorAll('ul.social li');

        this.buildTL();
    }

    buildTL() {
        this.tl = anime.timeline({ autoplay: false, loop: false });

        this.tl.add({
            targets: this.h1.querySelectorAll('.mask > .content'),
            translateY: ['110%', '0%'],
            duration: 700,
            easing: 'easeOutCirc',
            delay: anime.stagger(100)
        })
        .add({
            targets: this.social,
            opacity: [0, 1],
            duration: 800,
            easing: 'linear',
            delay: anime.stagger(200)
        }, '-=200');
    }

    display() {
        this.tl.play();
    }
}

export default Footer;
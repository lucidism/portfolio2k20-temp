class Footer {
    constructor() {
        this.$el = document.querySelector('footer');
        this.h1 = this.$el.querySelector('h1');
        this.borders = this.$el.querySelectorAll('.borders > span');
        this.social = this.$el.querySelectorAll('ul.social li');

        this.buildBordersTL();
        this.buildTL();
    }

    buildTL() {
        this.tl = anime.timeline({ autoplay: false, loop: false });

        this.tl.add({
            targets: this.h1.querySelectorAll('.mask > .content'),
            translateY: ['100%', '0%'],
            duration: 700,
            easing: 'easeOutCirc',
            delay: anime.stagger(100),
            begin: ::this.bordersTL.play
        })
        .add({
            targets: this.social,
            opacity: [0, 1],
            duration: 800,
            easing: 'linear',
            delay: anime.stagger(200)
        }, '-=200');
    }

    buildBordersTL() {
        this.bordersTL = anime.timeline({
            targets: this.borders,
            duration: 800,
            easing: 'easeOutCubic',
            delay: anime.stagger(100),
            autoplay: false,
            loop: false
        });

        this.bordersTL.add({
            scaleX: [0, 1]
        }, 200);
    }

    display() {
        this.tl.play();
    }
}

export default Footer;
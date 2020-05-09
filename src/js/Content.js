import tweens from './tweens';
import Splitting from 'splitting';

class Content {
    constructor() {
        // link to DOM nodes
        this.$el = document.querySelector('div.content');
        this.textContent = this.$el.querySelector('.text');
        this.title = this.textContent.querySelector('h3');
        this.paragraph = this.textContent.querySelector('p.main-desc');
        this.subParagraph = this.textContent.querySelector('p:last-of-type');
        this.separator = this.textContent.querySelector('span.separator');
        this.button = this.$el.querySelector('a.btn');

        this.splitEl(this.paragraph);

        // create timeline
        this.tl = anime.timeline({
            autoplay: false,
            loop: false
        });
        // build timeline
        this.buildTL();
    }

    buildTL() {
        // show main title
        this.tl.add({
            targets: this.title,
            duration: 900,
            opacity: [0, 1],
            easing: 'linear'
        }, 0)
        // reposition entire container
        .add({
            targets: this.textContent,
            duration: 1300,
            translateY: ['50%', '0%'],
            easing: 'easeInOutCubic'
        }, '-=250')
        // main paragraph
        .add({
            targets: [this.paragraph.querySelectorAll('span'), this.subParagraph],
            duration: 800,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutQuad',
            delay: anime.stagger(100)
        }, '-=600')
        // separator
        .add({
            targets: this.separator,
            duration: 700,
            scaleX: [0, 1],
            easing: 'easeOutCirc',
        }, '-=500')
        // bgShader visibility
        .add({
            targets: tweens,
            fadeIn: 1,
            duration: 2000,
            easing: 'linear'
        }, 2000);
    }

    splitEl(el) {
        let content = el.innerHTML;
        let splitContent = content.split("<br>");

        el.innerHTML = "";
        splitContent.forEach(line => {
            const n = document.createElement("span");
            n.innerHTML = line;
            el.appendChild(n);
            el.innerHTML += "<br>";
        });
    }

    play() {
        this.tl.play();
    }
}

export default Content;
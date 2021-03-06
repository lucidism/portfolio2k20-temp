import tweens from './tweens';
import Button from './components/Button';
import emitter from 'tiny-emitter/instance';
import anime from 'animejs/lib/anime.es';

class Content {
    constructor() {
        // link to DOM nodes
        this.$el = document.querySelector('div.content');
        this.textContent = this.$el.querySelector('.text');
        this.title = this.textContent.querySelector('h3');
        this.paragraph = this.textContent.querySelector(window.innerWidth <= 640 ? 'p.main-desc.mobile' : 'p.main-desc.desktop');
        this.subParagraph = this.textContent.querySelector('p:last-of-type');
        this.separator = this.textContent.querySelector('span.separator');
        this.button = new Button(this.$el.querySelector('a.btn'));

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
            duration: 800,
            opacity: [0, 1],
            easing: 'easeInOutQuad'
        }, 0)
        // reposition entire container
        .add({
            targets: this.textContent,
            duration: 1300,
            translateY: [window.innerWidth <= 640 ? '40%' : '50%', '0%'],
            easing: 'easeInOutCubic'
        })
        // main paragraph
        .add({
            targets: [this.paragraph.querySelectorAll('span'), this.subParagraph],
            duration: 800,
            opacity: [0, 0.85],
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
        // button
        .add({
            begin: ::this.button.display,
            duration: 10,
        }, '-=500')
        // bgShader visibility
        .add({
            targets: tweens,
            fadeIn: 1,
            duration: 2000,
            easing: 'linear',
            complete: () => emitter.emit("play-footer")
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

    display() {
        this.tl.play();
    }
}

export default Content;
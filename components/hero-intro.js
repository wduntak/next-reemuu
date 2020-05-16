import { Component } from 'react'
import { TimelineLite, Quint } from 'gsap'

export default class HeroIntro extends Component {
    componentDidMount() {
        new Slideshow(document.querySelector('.content'));
    }
    render() {
        return (
          <section className="content">
            <div className="content__slide">
              <div className="content__img first">
                <div className="content__img-inner"></div>
              </div>
              <div className="content__text-wrap">
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--stroke">
                    Design
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Design</span>
                </span>
                <span className="content__text content__text--full">
                  <span className="content__text-inner content__text-inner--stroke">
                    Design
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--stroke">
                    Design
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Design</span>
                </span>
                <span className="content__text content__text--full">
                  <span className="content__text-inner">Design</span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--bottom">
                    Design
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Design</span>
                </span>
                <span className="content__text content__text--full">
                  <span className="content__text-inner content__text-inner--stroke">
                    Design
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--stroke content__text-inner--bottom">
                    Design
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Design</span>
                </span>
              </div>
            </div>
            <div className="content__slide">
              <div className="content__img second">
                <div className="content__img-inner"></div>
              </div>
              <div className="content__text-wrap">
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--stroke">
                    Optimize
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Optimize</span>
                </span>
                <span className="content__text content__text--full">
                  <span className="content__text-inner content__text-inner--stroke">
                    Optimize
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--stroke">
                    Optimize
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Optimize</span>
                </span>
                <span className="content__text content__text--full">
                  <span className="content__text-inner">Optimize</span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--bottom">
                    Optimize
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Optimize</span>
                </span>
                <span className="content__text content__text--full">
                  <span className="content__text-inner content__text-inner--stroke">
                    Optimize
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--stroke content__text-inner--bottom">
                    Optimize
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Optimize</span>
                </span>
              </div>
            </div>
            <div className="content__slide">
              <div className="content__img third">
                <div className="content__img-inner"></div>
              </div>
              <div className="content__text-wrap">
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--stroke">
                    Imagine
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Imagine</span>
                </span>
                <span className="content__text content__text--full">
                  <span className="content__text-inner content__text-inner--stroke">
                    Imagine
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--stroke">
                    Imagine
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Imagine</span>
                </span>
                <span className="content__text content__text--full ">
                  <span className="content__text-inner">Imagine</span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--bottom">
                    Imagine
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Imagine</span>
                </span>
                <span className="content__text content__text--full">
                  <span className="content__text-inner content__text-inner--stroke">
                    Imagine
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner content__text-inner--stroke content__text-inner--bottom">
                    Imagine
                  </span>
                </span>
                <span className="content__text">
                  <span className="content__text-inner">Imagine</span>
                </span>
              </div>
            </div>
            <nav className="content__nav">
              <button className="content__nav-button content__nav-button--prev">
                Prev
              </button>
              <button className="content__nav-button content__nav-button--next">
                Next
              </button>
            </nav>
            <style jsx>{`
              .content {
                display: grid;
                grid-template-rows: 100%;
                grid-template-columns: 100%;
                grid-template-areas: "main";
                height: calc(100vh - 19rem);
                width: 100%;
                margin: 0 auto;
                position: relative;
              }

              .content__slide {
                grid-area: main;
                width: 100%;
                height: 100%;
                overflow: hidden;
                display: grid;
                grid-template-rows: 100%;
                grid-template-columns: 100%;
                grid-template-areas: "inner";
                align-items: center;
                opacity: 0;
                pointer-events: none;
              }

              .content__slide--current {
                opacity: 1;
              }

              .content__img,
              .content__text-wrap {
                grid-area: inner;
                width: 100%;
              }

              .content__img {
                height: calc(100vh - 25rem);
                width: 90%;
                max-width: calc(1000px - 11rem);
                max-height: 600px;
                justify-self: center;
                overflow: hidden;
                z-index: -1;
                position: relative;
              }

              .content__img--full::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(0, 0, 0, 0.3);
                width: 100%;
                height: 100%;
              }

              .content__img.first .content__img-inner {
                background-image: url("/16.jpeg");
              }

              .content__img.second .content__img-inner {
                background-image: url("/14.jpeg");
              }

              .content__img.third .content__img-inner {
                background-image: url("/15.jpeg");
              }

              .content__img-inner {
                width: 100%;
                height: 100%;
                background-position: 50% 50%;
                background-size: cover;
              }

              .content__text-wrap {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }

              .content__text {
                overflow: hidden;
                flex: 1;
                opacity: 0;
                pointer-events: none;
              }

              .content__text:nth-child(6) {
                opacity: 1;
              }

              .content__text--full {
                flex: none;
              }

              .content__text-inner {
                display: block;
                color: var(--color-slide-text);
                text-transform: uppercase;
                font-size: 3.5rem;
                font-weight: var(--font-trail-weight);
                line-height: var(--font-trail-lheight);
                font-family: var(--font-trail-family);
              }

              .content__text-inner--bottom {
                transform: translate3d(0, -40%, 0);
              }

              .content__text-inner--stroke {
                -webkit-text-stroke: 2px var(--color-slide-text);
                text-stroke: 2px var(--color-slide-text);
                -webkit-text-fill-color: transparent;
                text-fill-color: transparent;
                color: transparent;
              }

              .content__nav {
                grid-area: main;
                justify-self: center;
                align-self: end;
                width: calc(90% - 1rem);
                max-width: 1000px;
                height: auto;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                font-size: 1.25rem;
                position: relative;
              }

              .content__nav-button {
                border: 0;
                cursor: pointer;
                background: none;
                margin: 0.25rem 0;
                padding: 0;
                text-transform: lowercase;
                color: var(--color-nav);
                font-weight: 900;
                line-height: 1;
              }

              .content__nav-button:focus {
                outline: none;
              }

              @media screen and (min-width: 53em) {
                :root {
                  font-size: 16px;
                }
                .content {
                  height: 100vh;
                }
                .content__img {
                  width: calc(90% - 11rem);
                  height: 60vh;
                }
                .content__img--full {
                  height: calc(100vh + 20px);
                  width: calc(100vw + 20px);
                  max-width: none;
                  max-height: none;
                }
                .content__text-inner {
                  font-size: var(--font-trail-size);
                }
                .content__nav {
                  align-self: center;
                  flex-direction: column;
                  justify-content: flex-start;
                  font-size: 1.75rem;
                }
              }
            `}</style>
          </section>
        );
    }
};

class TextFX {
    constructor(el) {
        this.DOM = { el: el };
        // The texts (repeated)
        this.DOM.texts = [...this.DOM.el.querySelectorAll('.content__text')];
        this.DOM.textsTotal = this.DOM.texts.length;
        // The index of the main text element
        this.middleIdx = Math.floor(this.DOM.textsTotal / 2);
        // Time between each showing/hiding of each text instance
        this.loopInterval = { show: 80, hide: 80 };
        // optional: Extra time to the whole show/hide animation. 
        this.loopEndIddleTime = this.loopInterval.show;
    }
    show({ dir = 'both', halfwayCallback = null } = {}) {
        return new Promise((resolve, reject) => {
            const loopHide = (pos) => {
                if (this.middleIdx - pos === this.middleIdx) {
                    setTimeout(resolve, this.loopEndIddleTime);
                    return;
                }
                this.hideText(pos, dir);
                setTimeout(() => loopHide(pos - 1), this.loopInterval.hide);
            };
            const loopShow = (pos) => {
                if (this.middleIdx - pos > this.middleIdx) {
                    if (halfwayCallback && typeof halfwayCallback === 'function') {
                        halfwayCallback();
                    }
                    loopHide(this.middleIdx);
                    return;
                }
                this.showText(pos, dir);
                setTimeout(() => loopShow(pos - 1), this.loopInterval.show);
            };
            loopShow(this.middleIdx);
        });
    }
    hide({ dir = 'both', halfwayCallback = null } = {}) {
        return new Promise((resolve, reject) => {
            const loopHide = (pos) => {
                if (this.middleIdx - pos < 0) {
                    setTimeout(resolve, this.loopEndIddleTime);
                    return;
                }
                this.hideText(pos, dir);
                setTimeout(() => loopHide(pos + 1), this.loopInterval.hide);
            };
            const loopShow = (pos) => {
                if (this.middleIdx - pos < 0) {
                    if (halfwayCallback && typeof halfwayCallback === 'function') {
                        halfwayCallback();
                    }
                    loopHide(0);
                    return;
                }
                this.showText(pos, dir);
                setTimeout(() => loopShow(pos + 1), this.loopInterval.show);
            };
            loopShow(1);
        });
    }
    // Hides one (dir = 'up' or dir = 'down') or more texts, specifically the equally distant texts from main text (dir = 'both')
    hideText(pos, dir) {
        this.toggleText('hide', pos, dir);
    }
    showText(pos, dir) {
        this.toggleText('show', pos, dir);
    }
    toggleText(action, pos, dir) {
        const changeStyle = {
            up: _ => {
                this.DOM.texts[this.middleIdx - pos].style.opacity = action === 'show' ? 1 : 0;
            },
            down: _ => {
                this.DOM.texts[this.middleIdx + pos].style.opacity = action === 'show' ? 1 : 0;
            }
        };
        if (dir === 'both') {
            changeStyle['up']();
            changeStyle['down']();
        }
        else {
            changeStyle[dir]();
        }
    }
}

class Slide {
    constructor(el) {
        this.DOM = { el: el };
        this.DOM.img = {
            wrap: this.DOM.el.querySelector('.content__img'),
            inner: this.DOM.el.querySelector('.content__img-inner')
        };
        // The text effect class.
        this.textFX = new TextFX(this.DOM.el.querySelector('.content__text-wrap'));
    }
    // Hide the Slide's image
    hideImage(dir) {
        this.toggleImage('hide', dir);
    }
    // Show the Slide's image
    showImage(dir) {
        this.toggleImage('show', dir);
    }
    toggleImage(action, dir) {
        new TimelineLite().add('begin')
            .to(this.DOM.img.wrap, action === 'hide' ? 0.3 : 0.7, {
                ease: action === 'hide' ? Quint.easeOut : Quint.easeOut,
                startAt: action === 'hide' ? {} : { x: dir === 'next' ? '110%' : '-110%', opacity: 1 },
                x: action === 'hide' ? dir === 'next' ? '-110%' : '110%' : '0%'
            }, 'begin')
            .to(this.DOM.img.inner, action === 'hide' ? 0.3 : 0.7, {
                ease: action === 'hide' ? Quint.easeOut : Quint.easeOut,
                startAt: action === 'hide' ? {} : { x: dir === 'next' ? '-100%' : '100%' },
                x: action === 'hide' ? dir === 'next' ? '100%' : '-100%' : '0%'
            }, 'begin');
    }
}

class Slideshow {
    constructor(el) {
        this.DOM = { el: el };
        // Navigation controls
        this.DOM.nav = {
            prev: this.DOM.el.querySelector('.content__nav-button--prev'),
            next: this.DOM.el.querySelector('.content__nav-button--next')
        };
        // All slides
        this.slides = [];
        [...this.DOM.el.querySelectorAll('.content__slide')].forEach(slide => this.slides.push(new Slide(slide)));
        // Total number of slides
        this.slidesTotal = this.slides.length;
        // Current slide position
        this.current = 0;
        // Show the first one
        this.slides[this.current].DOM.el.classList.add('content__slide--current');
        // Initialize some events
        this.initEvents();
    }
    initEvents() {
        // Clicking next and previous controls.
        this.onClickPrevFn = _ => this.navigate('prev');
        this.onClickNextFn = _ => this.navigate('next');
        this.DOM.nav.prev.addEventListener('click', this.onClickPrevFn);
        this.DOM.nav.next.addEventListener('click', this.onClickNextFn);
    }
    navigate(dir) {
        if (this.isAnimating) {
            return false;
        }
        this.isAnimating = true;
        // Current slide
        const currentSlide = this.slides[this.current];

        // Update current
        this.current = dir === 'next' ?
            this.current < this.slidesTotal - 1 ? this.current + 1 : 0 :
            this.current > 0 ? this.current - 1 : this.slidesTotal - 1;

        // Upcoming slide
        const upcomingSlide = this.slides[this.current];

        const onCurrentHalfwayCallback = () => {
            // Hide the current slide's image
            currentSlide.hideImage(dir);
            // Set the upcoming slide's main text opacity to 1.
            upcomingSlide.textFX.DOM.texts[upcomingSlide.textFX.middleIdx].style.opacity = 0;
            // Add current class to the upcoming slide (opacity = 1)
            upcomingSlide.DOM.el.classList.add('content__slide--current');
            // Show the upcoming slide's image
            upcomingSlide.showImage(dir);
        };
        const onCurrentEndCallback = () => {
            // Remove the current class from the current slide.
            currentSlide.DOM.el.classList.remove('content__slide--current');
            upcomingSlide.textFX.show().then(() => this.isAnimating = false);
        };
        // Hide the current slide's text, 
        // and call onCurrentHalfwayCallback at half of the animation
        // In the end call onCurrentEndCallback
        currentSlide.textFX.hide({ halfwayCallback: onCurrentHalfwayCallback }).then(onCurrentEndCallback);
    }
}
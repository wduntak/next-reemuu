import Link from 'next/link'
import { Component } from 'react';
import { ease } from "../lib/easings";


export default class Navigation extends Component {
    constructor (props) {
        super(props);
        this.elmHamburger = [];
        this.gNavItems = [];
        this.elmOverlay = [];
        this.overlay = {};
    }

    componentDidMount() {
        this.elmHamburger = document.querySelector(".hamburger");
        this.gNavItems = document.querySelectorAll(".global-menu__item");
        this.elmOverlay = document.querySelector(".shape-overlays");
        this.overlay = new ShapeOverlays(this.elmOverlay);
    }

    animateOverlay = () => {
        if (this.overlay.isAnimating) {
            return false;
        }
        this.overlay.toggle();
        if (this.overlay.isOpened === true) {
            this.elmHamburger.classList.add("is-opened-navi");
            for (var i = 0; i < this.gNavItems.length; i++) {
                this.gNavItems[i].classList.add("is-opened");
            }
        } else {
            this.elmHamburger.classList.remove("is-opened-navi");
            for (var i = 0; i < this.gNavItems.length; i++) {
                this.gNavItems[i].classList.remove("is-opened");
            }
        }
    }

    render() {
        return (
          <>
            <div
              className="hamburger hamburger--demo-6 js-hover"
              onClick={this.animateOverlay}
            >
              <div className="hamburger__line hamburger__line--01">
                <div className="hamburger__line-in hamburger__line-in--01 hamburger__line-in--demo-5"></div>
              </div>
              <div className="hamburger__line hamburger__line--02">
                <div className="hamburger__line-in hamburger__line-in--02 hamburger__line-in--demo-5"></div>
              </div>
              <div className="hamburger__line hamburger__line--03">
                <div className="hamburger__line-in hamburger__line-in--03 hamburger__line-in--demo-5"></div>
              </div>
              <div className="hamburger__line hamburger__line--cross01">
                <div className="hamburger__line-in hamburger__line-in--cross01 hamburger__line-in--demo-5"></div>
              </div>
              <div className="hamburger__line hamburger__line--cross02">
                <div className="hamburger__line-in hamburger__line-in--cross02 hamburger__line-in--demo-5"></div>
              </div>
            </div>
            <div className="global-menu">
              <div className="global-menu__wrap">
                <Link href="/">
                    <a className="global-menu__item global-menu__item--demo-6" href="#">Home</a>
                </Link>
                <a
                  className="global-menu__item global-menu__item--demo-6"
                  href="#"
                >
                  Projects
                </a>
                <a
                  className="global-menu__item global-menu__item--demo-6"
                  href="#"
                >
                  Working Together
                </a>
                <a
                  className="global-menu__item global-menu__item--demo-6"
                  href="#"
                >
                  About
                </a>
                <a
                  className="global-menu__item global-menu__item--demo-6"
                  href="#"
                >
                  Blog
                </a>
                <Link href="/contact">
                    <a className="global-menu__item global-menu__item--demo-6" href="#">Contact</a>
                </Link>
              </div>
            </div>
            <svg
              className="shape-overlays"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00c99b" />
                  <stop offset="100%" stopColor="#ff0ea1" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffd392" />
                  <stop offset="100%" stopColor="#ff3898" />
                </linearGradient>
                <linearGradient
                  id="gradient3"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#110046" />
                  <stop offset="100%" stopColor="#32004a" />
                </linearGradient>
              </defs>
              <path className="shape-overlays__path"></path>
              <path className="shape-overlays__path"></path>
              <path className="shape-overlays__path"></path>
            </svg>
          </>
        );
    }
}

class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll("path");
    this.numPoints = 10;
    this.duration = 900;
    this.delayPointsArray = [];
    this.delayPointsMax = 300;
    this.delayPerPath = 250;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    for (var i = 0; i < this.numPoints; i++) {
      this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
    }
    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.isOpened = true;
    this.elm.classList.add("is-opened");
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove("is-opened");
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      points[i] =
        (1 -
          ease.cubicInOut(
            Math.min(
              Math.max(time - this.delayPointsArray[i], 0) / this.duration,
              1
            )
          )) *
        100;
    }

    let str = "";
    str += this.isOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = ((i + 1) / (this.numPoints - 1)) * 100;
      const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
        points[i + 1]
      } `;
    }
    str += this.isOpened ? `V 100 H 0` : `V 0 H 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute(
          "d",
          this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i))
        );
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute(
          "d",
          this.updatePath(
            Date.now() -
              (this.timeStart + this.delayPerPath * (this.path.length - i - 1))
          )
        );
      }
    }
  }
  renderLoop() {
    this.render();
    if (
      Date.now() - this.timeStart <
      this.duration +
        this.delayPerPath * (this.path.length - 1) +
        this.delayPointsMax
    ) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    } else {
      this.isAnimating = false;
    }
  }
}
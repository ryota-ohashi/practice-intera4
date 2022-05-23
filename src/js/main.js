import '../scss/style.scss'

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

class Intera4 {
  constructor() {
    this.setParams();
    this.bind();
  }
  setParams() {
    this.elWrapper = document.querySelector('.side-scroll__list-wrapper');
    this.elList = document.querySelector('.side-scroll__list');
    this.elTrigger = '.side-scroll__trigger'
  }
  bind(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(this.elList, {
      x: () => -(this.elList.clientWidth - this.elWrapper.clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: this.elTrigger,
        start: '50% 50%',
        end: () => `+=${this.elList.clientWidth - this.elWrapper.clientWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Intera4();
});



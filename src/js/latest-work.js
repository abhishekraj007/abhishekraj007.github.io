
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

{
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomFloat(minValue, maxValue, precision) {
    if (typeof (precision) == 'undefined') {
      precision = 2;
    }
    return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
  }

  // From https://davidwalsh.name/javascript-debounce-function.
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  class Slideshow {
    constructor(el) {
      this.DOM = {};
      this.DOM.el = el;
      this.settings = {
        animation: {
          slides: {
            duration: 400,
            easing: 'easeOutQuint'
          },
          shape: {
            duration: 400,
            easing: { in: 'easeOutQuint', out: 'easeInQuad' }
          }
        },
        frameFill: '#000'
      }
      this.init();
    }
    init() {
      this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slides--images > .slide'));
      this.slidesTotal = this.DOM.slides.length;
      this.DOM.nav = this.DOM.el.querySelector('.slidenav');
      this.DOM.titles = this.DOM.el.querySelector('.slides--titles');
      this.DOM.titlesSlides = Array.from(this.DOM.titles.querySelectorAll('.slide'));
      this.DOM.nextCtrl = this.DOM.nav.querySelector('.slidenav__item--next');
      this.DOM.prevCtrl = this.DOM.nav.querySelector('.slidenav__item--prev');
      this.current = 0;
      this.createFrame();
      this.initEvents();
    }
    createFrame() {
      this.rect = this.DOM.el.getBoundingClientRect();
      this.frameSize = this.rect.width / 12;
      this.paths = {
        initial: this.calculatePath('initial'),
        final: this.calculatePath('final')
      };
      this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.DOM.svg.setAttribute('class', 'shape');
      this.DOM.svg.setAttribute('width', '100%');
      this.DOM.svg.setAttribute('height', '100%');
      this.DOM.svg.setAttribute('viewbox', `0 0 ${this.rect.width} ${this.rect.height}`);

      const imgFillSize = this.calculateImgFillSizes();
      this.DOM.svg.innerHTML = `
                <defs>
                    <clipPath id="shape__clip">
                        <path fill="${this.settings.frameFill}" d="${this.paths.initial}"/>
                    </clipPath>
                </defs>
                <image xlink:href="img/map.png" clip-path="url(#shape__clip)" x="0" y="0" width="${imgFillSize.width}px" height="${imgFillSize.height}px"/>
            `;
      this.DOM.el.insertBefore(this.DOM.svg, this.DOM.titles);
      this.DOM.shape = this.DOM.svg.querySelector('path');
      this.DOM.imgFill = this.DOM.svg.querySelector('image');
    }
    calculateImgFillSizes() {
      const ratio = Math.max(this.rect.width / 1920, this.rect.height / 1140);
      return { width: 1920 * ratio, height: 1140 * ratio };
    }
    updateFrame() {
      this.paths.initial = this.calculatePath('initial');
      this.paths.final = this.calculatePath('final');
      this.DOM.svg.setAttribute('viewbox', `0 0 ${this.rect.width} ${this.rect.height}`);
      this.DOM.shape.setAttribute('d', this.isAnimating ? this.paths.final : this.paths.initial);
      const imgFillSize = this.calculateImgFillSizes();
      this.DOM.imgFill.setAttribute('width', `${imgFillSize.width}px`);
      this.DOM.imgFill.setAttribute('height', `${imgFillSize.height}px`);
    }
    calculatePath(path = 'initial') {
      const r = Math.sqrt(Math.pow(this.rect.height, 2) + Math.pow(this.rect.width, 2));
      const rInitialOuter = r;
      const rInitialInner = r;
      const rFinalOuter = r;
      const rFinalInner = this.rect.width / 3 * getRandomFloat(0.2, 0.4);
      const getCenter = () => `${getRandomInt(rFinalInner, this.rect.width - rFinalInner)}, ${getRandomInt(rFinalInner, this.rect.height - rFinalInner)}`;
      return path === 'initial' ?
        `M ${this.rect.width / 2}, ${this.rect.height / 2} m 0 ${-rInitialOuter} a ${rInitialOuter} ${rInitialOuter} 0 1 0 1 0 z m -1 ${rInitialOuter - rInitialInner} a ${rInitialInner} ${rInitialInner} 0 1 1 -1 0 Z` :
        `M ${getCenter()} m 0 ${-rFinalOuter} a ${rFinalOuter} ${rFinalOuter} 0 1 0 1 0 z m -1 ${rFinalOuter - rFinalInner} a ${rFinalInner} ${rFinalInner} 0 1 1 -1 0 Z`;
    }
    initEvents() {
      this.DOM.nextCtrl.addEventListener('click', () => this.navigate('next'));
      this.DOM.prevCtrl.addEventListener('click', () => this.navigate('prev'));

      window.addEventListener('resize', debounce(() => {
        this.rect = this.DOM.el.getBoundingClientRect();
        this.updateFrame();
      }, 20));

      document.addEventListener('keydown', (ev) => {
        const keyCode = ev.keyCode || ev.which;
        if (keyCode === 37) {
          this.navigate('prev');
        }
        else if (keyCode === 39) {
          this.navigate('next');
        }
      });
    }
    navigate(dir = 'next') {
      if (this.isAnimating) return false;
      this.isAnimating = true;

      const animateShapeIn = anime({
        targets: this.DOM.shape,
        duration: this.settings.animation.shape.duration,
        easing: this.settings.animation.shape.easing.in,
        d: this.calculatePath('final')
      });

      const animateSlides = () => {
        return new Promise((resolve, reject) => {
          const currentSlide = this.DOM.slides[this.current];
          anime({
            targets: currentSlide,
            duration: this.settings.animation.slides.duration,
            easing: this.settings.animation.slides.easing,
            translateY: dir === 'next' ? -1 * this.rect.height : this.rect.height,
            complete: () => {
              currentSlide.classList.remove('slide--current');
              resolve();
            }
          });

          const currentTitleSlide = this.DOM.titlesSlides[this.current];
          anime({
            targets: currentTitleSlide.children,
            duration: this.settings.animation.slides.duration,
            easing: this.settings.animation.slides.easing,
            delay: (t, i, total) => dir === 'next' ? i * 100 : (total - i - 1) * 100,
            translateY: [0, dir === 'next' ? -100 : 100],
            opacity: [1, 0],
            complete: () => {
              currentTitleSlide.classList.remove('slide--current');
              resolve();
            }
          });

          this.current = dir === 'next' ?
            this.current < this.slidesTotal - 1 ? this.current + 1 : 0 :
            this.current > 0 ? this.current - 1 : this.slidesTotal - 1;

          const newSlide = this.DOM.slides[this.current];
          newSlide.classList.add('slide--current');
          anime({
            targets: newSlide,
            duration: this.settings.animation.slides.duration,
            easing: this.settings.animation.slides.easing,
            translateY: [dir === 'next' ? this.rect.height : -1 * this.rect.height, 0]
          });

          const newSlideImg = newSlide.querySelector('.slide__img');
          anime.remove(newSlideImg);
          anime({
            targets: newSlideImg,
            duration: this.settings.animation.slides.duration * 4,
            easing: this.settings.animation.slides.easing,
            translateY: [dir === 'next' ? 100 : -100, 0]
          });

          const newTitleSlide = this.DOM.titlesSlides[this.current];
          newTitleSlide.classList.add('slide--current');
          anime({
            targets: newTitleSlide.children,
            duration: this.settings.animation.slides.duration * 2,
            easing: this.settings.animation.slides.easing,
            delay: (t, i, total) => dir === 'next' ? i * 100 + 100 : (total - i - 1) * 100 + 100,
            translateY: [dir === 'next' ? 100 : -100, 0],
            opacity: [0, 1]
          });
        });
      };

      const animateShapeOut = () => {
        anime({
          targets: this.DOM.shape,
          duration: this.settings.animation.shape.duration,
          //delay: 100,
          easing: this.settings.animation.shape.easing.out,
          d: this.paths.initial,
          complete: () => this.isAnimating = false
        });
      }

      animateShapeIn.finished.then(animateSlides).then(animateShapeOut);
    }
  };

  new Slideshow(document.querySelector('.slideshow'));
  imagesLoaded('.slide__img', { background: true }, () => document.body.classList.remove('loading'));
};
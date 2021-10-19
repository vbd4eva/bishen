// object-dictionary of constants and settings of the "Clients" block
// объект-словарь констант и настроек блока "Клиенты Слайдер"

//  '<button class="client-slider__arrow double-arrow js-double-arrow-animate" aria-label="Previous" type="button">попередній слайд</button>',
// '<button class="client-slider__arrow double-arrow js-double-arrow-animate" aria-label="Next" type="button">наступний слайд</button>',

const stateSliderClients = {
  refs: {
    container: '.js-clients',
    singleSlider: '.js-client-slider',
  },

  html: {
    sliderCustomButtons: {
      prevArrow:
        '<button class="client-slider__arrow client-slider__arrow--previous double-arrow js-double-arrow-animate" aria-label="попередній слайд" type="button"></button>',
      nextArrow:
        '<button class="client-slider__arrow client-slider__arrow--next double-arrow js-double-arrow-animate" aria-label="наступний слайд" type="button"></button>',
    },
  },

  intersectionObserver: {
    options: {
      threshold: 0.51,
    },
  },

  currentSlider: {
    value: null,
    get() {
      // console.log('get() currentSlider value', this.value);
      return this.value;
    },
    set(value) {
      this.value = value;
      // console.log('set(value)', this.value);
    },
  },

  finishScrollUp: {
    eventDelay: 250,
  },

  getClientsSlidersIDs() {
    const refSlider = this.refs.singleSlider;
    return [...document.querySelectorAll(refSlider)].map(slider => slider.id);
  },
};

export default stateSliderClients;

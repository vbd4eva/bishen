// object-dictionary of constants and settings of the "Clients" block
// объект-словарь констант и настроек блока "Клиенты Слайдер"

const stateSliderClients = {
    refs: {
        container: '.js-clients',
        singleSlider: '.js-client-slider',
    },
    
    html: {
        sliderCustomButtons: {
            prevArrow: '<button class="client-slider__arrow double-arrow js-double-arrow-animate" aria-label="Previous" type="button">предыдущий слайд</button>',
            nextArrow: '<button class="client-slider__arrow double-arrow js-double-arrow-animate" aria-label="Next" type="button">следующий слайд</button>'
        }
    },

    intersectionObserver: {
        options : {
             threshold: 0.51, 
        },
    },
    
    currentSlider: {
        value: null,
        get() {
            return this.value;
        },
        set(value) {
            this.value = value;
        }
    },

    finishScrollUp: {
        eventDelay: 250,
    }
    
}

export default stateSliderClients;
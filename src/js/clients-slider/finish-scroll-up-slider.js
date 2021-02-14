import stateSliderClients from './stateSliderClients';
import stopScrollEventListener from "./stop-scroll-listener";


const { currentSlider } = stateSliderClients;
const { eventDelay } = stateSliderClients.finishScrollUp;

const scrollToTop = () => {      

    const {dataset,offsetHeight} = currentSlider.get();
    const scrollY = (offsetHeight * dataset.id);

    window.scrollTo({
    top: scrollY,
    behavior: 'smooth',
    });

}

stopScrollEventListener(scrollToTop, eventDelay);
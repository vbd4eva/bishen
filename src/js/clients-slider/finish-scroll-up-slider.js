import stateSliderClients from './stateSliderClients';
import stopScrollEventListener from "./stop-scroll-listener";


const { currentSlider } = stateSliderClients;
const { eventDelay } = stateSliderClients.finishScrollUp;

const scrollToTop = () => {      

    const {dataset,offsetHeight} = currentSlider.get();
    const scrollY = (offsetHeight * dataset.id);

    // console.log(location.hash);
    console.log('scrollY', scrollY, 'dataset.id', dataset.id);

    scrollToY(scrollY);
}

function scrollToY(scrollY) {
    window.scrollTo({
    top: scrollY,
    behavior: 'smooth',
    });
}

stopScrollEventListener(scrollToTop, eventDelay);
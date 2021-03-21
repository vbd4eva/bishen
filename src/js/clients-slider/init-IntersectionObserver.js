import stateSliderClients from "./stateSliderClients";

const { intersectionObserver, currentSlider } = stateSliderClients;
const { container, singleSlider } = stateSliderClients.refs;

const clientSliders = document.querySelectorAll(`${container} > ${singleSlider}`);
// const clientSliders = stateSliderClients.getClientsSliders();

const onEntry = (entries, observer) => {
    entries.forEach(
        (entrie) => {
            if (entrie.isIntersecting) {

                currentSlider.set(entrie.target);
                console.log("slider "+stateSliderClients.currentSlider.get().id+" is current!");

            }
         });
};

const observer = new IntersectionObserver(onEntry, intersectionObserver.options);

clientSliders.forEach(
    elem => observer.observe(elem)
);


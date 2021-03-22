import $ from "jquery";
import slick from "slick-carousel";
import "../buttons/double-arrows";

import stateSliderClients from "./stateSliderClients";

const { singleSlider } = stateSliderClients.refs;
const { sliderCustomButtons } = stateSliderClients.html;


//init slick slider
$(singleSlider).slick({
  // lazyLoad: 'ondemand',
  ...sliderCustomButtons
} );   
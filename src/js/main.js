import modal from "./modules/modal";
import sliders from "./modules/slider";
import forms from "./modules/form";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput";
import showMoreStyles from "./modules/showMore";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";

window.addEventListener('DOMContentLoaded', () => {
    modal();
    sliders('.feedback-slider-item', 'h', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
});
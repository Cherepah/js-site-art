import modal from "./modules/modal";
import sliders from "./modules/slider";
import forms from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
    modal();
    sliders('.feedback-slider-item', 'h', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
});
import modal from "./modules/modal";
import sliders from "./modules/slider";
import forms from "./modules/form";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput";

window.addEventListener('DOMContentLoaded', () => {
    modal();
    sliders('.feedback-slider-item', 'h', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');
});
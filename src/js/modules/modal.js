const modal = () => {
    function bindModal(modalTriggerSelector, modalWindowSelector, modalCloseBtnSelector, closeClickOverlay = true) {
        const modalTrigger = document.querySelectorAll(modalTriggerSelector),
          modalWindow = document.querySelector(modalWindowSelector),
          modalCloseBtn = document.querySelector(modalCloseBtnSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();

        modalTrigger.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modalWindow.style.display = 'block';
                // modalWindow.classList.add('animation-modal');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            }); 
        });
                   

        modalWindow.addEventListener('click', (e) => {
            if(e.target === modalWindow && closeClickOverlay) {

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modalWindow.style.display = 'none';
                // modalWindow.classList.remove('animation-modal') ;
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        });

        modalCloseBtn.addEventListener('click', () => {

            windows.forEach(item => {
                item.style.display = 'none';
            });

            modalWindow.style.display = 'none';
            // modalWindow.classList.remove('animation-modal');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        });
    }

    function showModalByTime(modalSelector, time) {
        const modalWindow = document.querySelector(modalSelector);
        
        setTimeout( () => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                modalWindow.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    
    showModalByTime('.popup-consultation', 6000);
};

export default modal;
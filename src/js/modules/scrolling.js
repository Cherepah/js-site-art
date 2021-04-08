const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) { //document.documentElement.scrollTop сколько проскролили сверху
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.7;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top, 
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock)
                    : Math.min(widthTop + progress/speed, widthTop + toBlock));
                
                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

    //
    // const element = document.documentElement,
    //       body = document.body;
    
    // const calcScroll = () => {
    //     upElem.addEventListener('click', function(event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             let hashElement = document.querySelector(this.hash),
    //                 hashElementTop = 0;

    //             while (hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };

    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speedScroll;

    //     if (to > from) {
    //         speedScroll = 30;
    //     } else {
    //         speedScroll = -30;
    //     }

    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (prevScrollTop === scrollTop || 
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)) {
    //                 clearInterval(move);
    //                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speedScroll;
    //             element.scrollTop += speedScroll;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };

    // calcScroll();
};

export default scrolling;
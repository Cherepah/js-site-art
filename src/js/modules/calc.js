const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promoBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let  sum = 0;

    const calsFunc = () => {
        sum = Math.round( (+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value) );

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promoBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calsFunc);
    materialBlock.addEventListener('change', calsFunc);
    optionsBlock.addEventListener('change', calsFunc);
    promoBlock.addEventListener('input', calsFunc);
};

export default calc;
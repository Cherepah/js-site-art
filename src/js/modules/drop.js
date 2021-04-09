const drop = () => {
    // drag
    // dragen
    // dragenter - объект над dropArea
    // dragexit
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // dragstart
    // drop - объект отпустили в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function hightLight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .7)';
    }

    function unHightLight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => hightLight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHightLight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arrName = input.files[0].name.split('.');
            arrName[0].length > 6 ? dots = '...' : dots = '.';
            const name = arrName[0].substring(0, 6) + dots + arrName[1];
            input.previousElementSibling.textContent = name;
            console.log(name);
        });
    });
};

export default drop;
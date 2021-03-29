const checkTextInput = (selectorInput) => {
    const textInputs = document.querySelectorAll(selectorInput);

    textInputs.forEach(textInput => {
        textInput.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInput;
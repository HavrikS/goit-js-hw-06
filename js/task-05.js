const nameOutput = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');

const initialNameOutput = nameOutput.textContent;

function onInput() {    
    nameInput.value ?
        (nameOutput.textContent = nameInput.value) :
        (nameOutput.textContent = initialNameOutput);
};

nameInput.addEventListener('input', onInput);
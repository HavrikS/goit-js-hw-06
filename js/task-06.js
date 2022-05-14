const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur() {
    
    (validationInput.value.length !== validationInput.dataset.length * 1) ?
        validationInput.classList.add("invalid") :
        validationInput.classList.contains("invalid") ?
            validationInput.classList.replace("invalid", "valid") :
            validationInput.classList.add("valid");
};
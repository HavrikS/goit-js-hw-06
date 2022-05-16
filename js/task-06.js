const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur() {
  if (validationInput.value.length !== validationInput.dataset.length * 1) {
        addClassInvalid();
    } else {
        addClassValid();
    }
};

function addClassInvalid() {
    if (validationInput.classList.contains("valid")) {
        validationInput.classList.replace("valid", "invalid");
    } else {
        validationInput.classList.add("invalid");
    }
};

function addClassValid() {
    if (validationInput.classList.contains("invalid")) {
        validationInput.classList.replace("invalid", "valid");
    } else {
        validationInput.classList.add("valid");
    }
};

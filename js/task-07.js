const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function onFontSizeControlInput() {
    text.style.fontSize = `${fontSizeControl.value}px`;
};

document.addEventListener('DOMContentLoaded', onFontSizeControlInput);

fontSizeControl.addEventListener('input', onFontSizeControlInput);




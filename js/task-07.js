const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(text);

function onFontSizeControlInput() {
    text.style.fontSize = `${fontSizeControl.value}px`;
    console.log(`${fontSizeControl.value} px`);
};

fontSizeControl.addEventListener('input', onFontSizeControlInput);
const refs = {
  boxes: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



function createBoxes(amount) {
  let box = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    const newSize = 30 + 10 * i;
    divEl.style.width = `${newSize}px`;
    divEl.style.height = `${newSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();    
    box.push(divEl)        
  } 
  refs.boxes.append(...box);   
}

function onButtonCreateClick() {
  createBoxes(refs.inputEl.value)
};

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  // while (refs.boxes.firstChild) {
  // refs.boxes.removeChild(refs.boxes.firstChild);
  refs.inputEl.value = "";
}

function onButtonDestroyClick() {
  destroyBoxes()
}

refs.buttonCreate.addEventListener('click', onButtonCreateClick);
refs.buttonDestroy.addEventListener('click', onButtonDestroyClick);
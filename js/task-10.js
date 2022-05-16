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
    if (i > 0) {
      divEl.style.width = `${parseInt(box[i - 1].style.width) + 10}px`;
      divEl.style.height = `${parseInt(box[i - 1].style.height) + 10}px`;      
    } else {
      divEl.style.width = "30px";
      divEl.style.height = "30px";
    }
    
    divEl.style.backgroundColor = getRandomHexColor();    
    box.push(divEl)        
  } 
  refs.boxes.append(...box);   
};

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
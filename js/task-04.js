const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

valueEl.textContent = counterValue;

console.log(valueEl.textContent);

decrementBtn.addEventListener("click", onDecrementBtnClick);

incrementBtn.addEventListener("click", onIncrementBtnClick);

function reRender() {
  valueEl.textContent = counterValue;
}

function onDecrementBtnClick() {  
  counterValue -= 1;
  reRender()
};

function onIncrementBtnClick() {
  counterValue += 1;
  reRender()
};



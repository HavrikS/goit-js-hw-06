const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorBcg = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColorBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorBcg.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener('click', onChangeColorBtnClick);
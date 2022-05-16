const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

function createListItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.classList.add('item');  
  return li
};

const list = ingredients.map(ingredient => createListItem(ingredient));


ingredientsEl.append(...list);

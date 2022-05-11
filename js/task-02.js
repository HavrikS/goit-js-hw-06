const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

let list = [];

const createListItem = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  li.classList.add('item');
  list.push(li);
};

ingredients.forEach(ingredient => createListItem(ingredient));

ingredientsEl.append(...list);

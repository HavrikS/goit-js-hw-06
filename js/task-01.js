const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach((categorie) => {
  console.log(`Category: ${categorie.firstElementChild.textContent}
Elements: ${categorie.lastElementChild.children.length}`);
});

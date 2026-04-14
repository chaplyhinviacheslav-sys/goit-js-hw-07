const items = document.querySelectorAll('.item');

const categoriesList = document.querySelector('#categories');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.querySelector('.item-subtitle').textContent;
  const subItems = item.querySelectorAll('.subitem');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subItems.length}`);
});

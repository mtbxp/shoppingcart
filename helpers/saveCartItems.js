const saveCartItems = () => {
  const allItems = document.querySelector('.cart__items').childNodes;
  const itemsToSave = [];
  allItems.forEach((item) => itemsToSave.push(item.innerText));
  localStorage.setItem('savedItems', JSON.stringify(itemsToSave));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

function loadSavedCartItems(item) {
  const limaker = document.createElement('li');
  limaker.className = 'cart__item';
  limaker.innerText = item;
  document.querySelector('.cart__items').appendChild(limaker);
}

const getSavedCartItems = () => {
  if (localStorage.length > 0) {
    const storageItemsString = localStorage.getItem('cartItems');
    const storageItemsObj = JSON.parse(storageItemsString);
    storageItemsObj.forEach((item) => loadSavedCartItems(item));
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

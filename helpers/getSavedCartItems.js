function loadSavedCartItems(item) {
  try {
    const limaker = document.createElement('li');
    limaker.className = 'cart__item';
    limaker.innerText = item;
    document.querySelector('.cart__items').appendChild(limaker);
  } catch (err) {
    return new Error(`Um erro ocorreu. :c\n${err}`);
  }
}

const getSavedCartItems = (whatToLoad) => {
  try {
    const storageItemsString = localStorage.getItem(`${whatToLoad}`);
    const storageItemsObj = JSON.parse(storageItemsString);
    storageItemsObj.forEach((item) => loadSavedCartItems(item));
  } catch (err) {
    return new Error(`Um erro ocorreu. :c\n${err}`);
  }
};

if (typeof module !== 'undefined') {
  const modules = { getSavedCartItems, loadSavedCartItems };
  module.exports = modules;
}

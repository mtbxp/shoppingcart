const arrCartData = [];

const saveCartItems = (key, itens) => {
  arrCartData.push(itens);
  const storageData = localStorage.setItem(key, JSON.stringify(arrCartData));
  return storageData;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

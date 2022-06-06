const saveCartItems = (idItem) => {
  localStorage.setItem('cartItems', idItem);

  const itemLocalStorage = JSON.stringify(idItem);
  localStorage.setItem('cartItems', itemLocalStorage);
 };

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

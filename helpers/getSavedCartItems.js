const getSavedCartItems = () => {
  // seu código aqui
  const storage = localStorage.getItem('cartItems');
  if (storage !== null) {
    return document.querySelector('ol.cart__items')
      .appendChild(storage);
  }
  console.log(storage);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
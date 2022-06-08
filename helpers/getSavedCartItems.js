// const saveCartItems = require("./saveCartItems");

const getSavedCartItems = () => localStorage.getItem('cartItems');
  // const olList = document.getElementsByClassName('cart__items');
  // const returnItems = localStorage.getItem(olList);
  // olList.innerHTML = returnItems;

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

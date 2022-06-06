const localStorageSimulator = require('../mocks/localStorageSimulator');

const saveCartItems = async (addyElm) => {
  if (!addyElm) {
    throw new Error('you make any error');
  }
  return localStorage.setItem('cartItems', addyElm);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

const saveCartItems = (cartItem) => {
  const setStorage = localStorage.setItem('cartItems', cartItem);
  return JSON.parse(setStorage);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

const saveCartItems = (htmlItems) => {
localStorage.setItem('cartItems', htmlItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
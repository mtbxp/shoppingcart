const saveCartItems = async (htmlItems) => {
localStorage.setItem('cartItems', htmlItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
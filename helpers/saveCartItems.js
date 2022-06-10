const saveCartItems = async () => {
// const returnAddItemCart = await addItemCart();
localStorage.setItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

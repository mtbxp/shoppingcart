const saveCartItems = (item) => {
   localStorage.setItem('cartItems', item);
  };

saveCartItems('item');

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

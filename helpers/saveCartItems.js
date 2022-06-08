const saveCartItems = (strOfCartHTML) => { localStorage.setItem('cartItems', strOfCartHTML); };

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

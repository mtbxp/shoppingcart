const saveCartItems = (produtos) => {
  localStorage.setItem('cartItems', produtos);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

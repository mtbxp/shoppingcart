const saveCartItems = () => {
  localStorage.setItem('cartProducts');
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

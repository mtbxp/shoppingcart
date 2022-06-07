const saveCartItems = (dados) => {
  localStorage.setItem('cartItems', dados);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

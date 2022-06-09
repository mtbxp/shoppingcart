const saveCartItems = (item) => {
  // seu código aqui
  localStorage.setItem('cartItems', item);
  console.log(localStorage.getItem('cartItems'));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

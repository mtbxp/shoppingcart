const saveCartItems = (elem) => {
  // seu código aqui
  localStorage.setItem('cartItems', elem.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

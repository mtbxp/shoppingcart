const saveCartItems = (product) => {
if (localStorage.getItem('cartItems') !== null) {
  const information = JSON.parse(localStorage.getItem('cartItems'));
  localStorage.setItem('cartItems', JSON.stringify([...information, product]));
  }
if (localStorage.getItem('cartItems') === null) {
localStorage.setItem('cartItems', JSON.stringify([product]));
}
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

const getSavedCartItems = () => {
  // seu código aqui
  // console.log((localStorage.getItem('cartItems'), 8));
  if (localStorage.getItem('cartItems') !== undefined) {
    return JSON.parse(localStorage.getItem('cartItems'));
  }
  return null;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

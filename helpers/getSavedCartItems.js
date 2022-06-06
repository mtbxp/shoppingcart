const getSavedCartItems = () => 
  // seu código aqui
  // console.log((localStorage.getItem('cartItems'), 8));
  JSON.parse(localStorage.getItem('cartItems'));

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

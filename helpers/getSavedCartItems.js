const getSavedCartItems = () => {
  const get = localStorage.getItem('cartItems');
  return get;
};
console.log(getSavedCartItems());
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
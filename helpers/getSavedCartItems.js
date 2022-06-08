const getSavedCartItems = () => {
  const item = localStorage.getItem('cartItem');
  const obj = JSON.parse(item);
  return obj;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

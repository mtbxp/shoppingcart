const getSavedCartItems = () => {
  localStorage.getItem('cartProducts');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

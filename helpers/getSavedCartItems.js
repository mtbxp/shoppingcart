const getSavedCartItems = () => {
  // seu código aqui
  const itemStringfy = localStorage.getItem('cartItems');
  const itemInLocalStorage = JSON.parse(itemStringfy);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

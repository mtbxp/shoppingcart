const getSavedCartItems = () => {
  const getLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
  console.log(getLocalStorage);
  return getLocalStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

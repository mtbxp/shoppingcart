const getSavedCartItems = async () => {
  const string = localStorage.getItem('cartItems');
  const result = await JSON.parse(string);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

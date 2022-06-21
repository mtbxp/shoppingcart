const getSavedCartItems = () => {
  // seu código aqui
  localStorage.getItem('itemList');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

const getSavedCartItems = () => localStorage.getItem('listOfItems');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

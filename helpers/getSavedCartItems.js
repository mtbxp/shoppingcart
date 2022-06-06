const getSavedCartItems = (keyName) => {
  localStorage.getItem(keyName);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

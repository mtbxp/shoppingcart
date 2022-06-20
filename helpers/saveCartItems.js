const saveCartItems = (itemValue) => localStorage.setItem(itemValue);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

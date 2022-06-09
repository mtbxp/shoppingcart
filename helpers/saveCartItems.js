const saveCartItems = (id) => {
  window.localStorage.setItem('saveCartItems', id)
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

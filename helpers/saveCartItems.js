const saveCartItems = async (item) => {
  // const renderStringify = JSON.stringify();
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

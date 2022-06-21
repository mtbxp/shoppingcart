const saveCartItems = async (item) => {
  // const renderStringify = JSON.stringify();
  localStorage.setItem('itemList', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

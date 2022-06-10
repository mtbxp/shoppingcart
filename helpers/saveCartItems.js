const saveCartItems = (itemSave) => {
  // seu código aqui
  const itemStringfy = JSON.stringify(itemSave);
  localStorage.setItem('cartItems', itemStringfy);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

const saveCartItems = (parametro) => {
  const stringfyItem = JSON.stringify(parametro);
  localStorage.setItem('cartItems', stringfyItem);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

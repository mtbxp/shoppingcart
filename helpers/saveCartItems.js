const saveCartItems = (digitado) => {
  const item = digitado;
  const itemstringfycado = JSON.stringify(item);
  const storage = localStorage;
  storage.setItem('cartItem', itemstringfycado);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

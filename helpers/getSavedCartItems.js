const getSavedCartItems = (keyName) => {
  if (!keyName) {
    return new Error('Você deve providenciar o parâmetro "keyName"');
  }
  const cartData = localStorage.getItem(keyName);
  return cartData;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

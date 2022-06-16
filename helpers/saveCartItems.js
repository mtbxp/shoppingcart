const arrayItem = [];
const saveCartItems = (itemID) => {
  try {
      arrayItem.push(itemID);
      const itemLocalStorage = localStorage.setItem('cartItems', JSON.stringify(arrayItem));
      return itemLocalStorage;
    } catch (error) {
      return new Error('mensagem esperada aqui');
    }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

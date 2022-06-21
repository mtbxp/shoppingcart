const saveCartItems = (itemStorage) => { 
    localStorage.setItem('cartItems', itemStorage);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

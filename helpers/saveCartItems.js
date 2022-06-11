const saveCartItems = (elements) => {
  localStorage.setItem('cartItems', elements);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

// Referência WebStorage : <https://www.w3schools.com/html/html5_webstorage.asp>

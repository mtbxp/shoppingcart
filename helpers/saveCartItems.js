const saveCartItems = (param) => {
  localStorage.setItem('cartItems', param);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

// Estudar mais localStorage
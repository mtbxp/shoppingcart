const saveCartItems = (savedItems) => {
  try { 
    localStorage.setItem('cartItems', savedItems);
  } catch (error) {
  return error; 
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

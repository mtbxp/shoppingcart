const getSavedCartItems = () => {
  try { 
    localStorage.getItem('cartItems');
  } catch (error) {
  return error; 
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

const saveCartItems = async (item) => {
  try {
    const data = JSON.stringify(item);
    localStorage.setItem('cartItems', data);
  } catch (error) {
    return error;    
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

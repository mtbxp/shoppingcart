const saveCartItems = async (item) => {
  try {
    if (!item) {
      const data = JSON.stringify(item);
      localStorage.setItem('cartItems', data);
    }
  } catch (error) {
    throw new Error(error);    
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

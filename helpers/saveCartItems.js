const saveCartItems = async (item) => {
  try {
    if (item !== undefined) {
      const data = JSON.stringify(item);
      console.log(data);
      localStorage.setItem('cartItems', data);
    }
  } catch (error) {
    throw new Error(error);    
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

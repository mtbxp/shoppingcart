const saveCartItems = async (item) => {
  console.log('fora');
  console.log(item);
  try {
    if (item) {
      console.log('aquii');
      const data = JSON.stringify(item);
      localStorage.setItem('cartItems', data);
    }
  } catch (error) {
    return error;    
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

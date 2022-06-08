const getSavedCartItems = () => {
    const listString = localStorage.getItem('cartItems');
    return JSON.parse(listString);
  };
  
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

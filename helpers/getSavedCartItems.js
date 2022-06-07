const getSavedCartItems = () => {
  const li = localStorage.getItem('cartItems');
  console.log(li);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

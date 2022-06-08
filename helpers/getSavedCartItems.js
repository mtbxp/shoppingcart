const getSavedCartItems = () => {
    const item = localStorage.getItem('cartItem');
    return item;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

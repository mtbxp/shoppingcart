const getSavedCartItems = () => {
  const dataStringify = localStorage.getItem('cartItems');
  if (dataStringify) {
    const data = JSON.parse(dataStringify);
    return data;
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

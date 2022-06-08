const saveCartItems = (data) => {
  const dataStringify = JSON.stringify(data);
  localStorage.setItem('cartItems', dataStringify);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

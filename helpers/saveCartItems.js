const saveCartItems = (data) => {
  // const dataStringify = JSON.stringify(data);
  localStorage.setItem('cartItems', JSON.stringify(data));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

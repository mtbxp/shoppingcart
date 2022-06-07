const saveCartItems = (ordenadList) => {
  // seu código aqui
  console.log(JSON.stringify(ordenadList.innerHTML));
  localStorage.setItem('cartItems', JSON.stringify(ordenadList.innerHTML));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

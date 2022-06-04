const saveCartItems = (component) => {
  // const componenteStringficado = JSON.stringify(component);
  localStorage.setItem('cartItems', component);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

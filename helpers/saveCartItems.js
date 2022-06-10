const saveCartItems = (list) => {
  // seu código aqui json.stringify
    localStorage.setItem('cartItems', list);

   // console.log(localStorage);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

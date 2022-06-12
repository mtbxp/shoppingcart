const saveCartItems = (productList) => localStorage.setItem('cartItems', productList);

// Para 'saveCartItems' foi recebido a orientação e auxilio do Chagas Fernando - Turma 22 - Tribo A

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

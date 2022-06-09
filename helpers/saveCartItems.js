const saveCartItems = (product) => {
  // seu código aqui
// Verificar se a chave cartItems existe no localStorage

// Se nao existir, colocar a chave cartItems com o parmetro product dentro de um array
localStorage.setItem('cartItems', JSON.stringify([product]));
// Se existir, preciso buscar essa chave (JSON.parse) e alterar o array
const information = JSON.parse(localStorage.getItem('cartItem'));
// Aqui vai vir a alteracao da constante information

// Depois de alterado, colocar novamente no localStorage
localStorage.setItem('cartItems', JSON.stringify(information));

// let addProduct = [];
// if (information) {
//   addProduct = [...information];
// }

// addProduct.push({ ...product });
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

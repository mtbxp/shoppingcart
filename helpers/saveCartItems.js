const saveCartItems = (product) => {
  // seu código aqui
  const { id: sku, title: name, price: salePrice } = product;
  const productToAddLocal = { sku, name, salePrice };
  const cart = JSON.parse(localStorage.getItem('cartItem'));
  const response = [];
  // agora preciso fazer um array de objetos recebendo os objetos que estão no localStorage e adicionar outro objeto
  if (Array.isArray(cart)) {
    cart.forEach((item) => {
      response.push(item);
    });
  } else {
    response.push(cart);
  }
  response.push(productToAddLocal);
  console.log(response);
  localStorage.setItem('cartItem', JSON.stringify(response));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

const saveCartItems = async (component) => {
  // metodo usando objetos
  // const nowObjSTR = await localStorage.getItem('cartItems');
  // const data = JSON.parse(nowObjSTR);
  // data.push(component);
  // localStorage.setItem('cartItems', JSON.stringify(data));
  localStorage.setItem('cartItems', component);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

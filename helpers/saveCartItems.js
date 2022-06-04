const saveCartItems = (param) => {
  if (!localStorage.getItem('cartItems')) {
    localStorage.setItem('cartItems', '[]');
  }
  const itemArr = JSON.parse(localStorage.getItem('cartItems'));
  itemArr.push({ text: param.innerText, class: param.className })
  
  localStorage.setItem('cartItems', JSON.stringify(itemArr));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

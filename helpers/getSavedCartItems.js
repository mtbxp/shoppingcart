const getSavedCartItems = () => {
  // seu código aqui
  const olFather = document.getElementsByClassName('cart__items')[0];
  const newArray = JSON.parse(localStorage.getItem('cartItems'));
  for (let index = 0; index < newArray.length; index += 1) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerHTML = newArray[index];
  olFather.appendChild(li); 
}
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

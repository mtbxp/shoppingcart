const getSavedCartItems = () => {
  const reload = JSON.parse(localStorage.getItem('cartItems'));
  const ol = document.querySelector('.cart__items');
  if (reload) {
    reload.forEach((el) => {
      const li = document.createElement('li');
      li.innerText = el.text;
      li.className = el.class;
      ol.appendChild(li);
    })
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

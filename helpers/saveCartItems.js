const saveCartItems = (data) => {
  localStorage.setItem('cartItems', data);
  // if (localStorage.getItem('cartItems') === null) { 
  //   localStorage.setItem('cartItems', '[]');
  // }

  // const dataLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
  // // console.log(dataLocalStorage);
  // dataLocalStorage.push(data);

  // const sendToLocalStorage = JSON.stringify(dataLocalStorage);
  // localStorage.setItem('cartItems', sendToLocalStorage);
 };

// console.log(getSavedCartItems('valmir'));

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

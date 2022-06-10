const getSavedCartItems = () => {
  const string = localStorage.getItem('cartItems');
  // const result = JSON.parse(string);
  return string;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

/* const string = localStorage.getItem('cartItems');
const result = JSON.parse(string);
return result; */

const getSavedCartItems = async () => {
  const string = await JSON.parse(localStorage.getItem('cartItems'));
  return string;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

/* const string = localStorage.getItem('cartItems');
const result = JSON.parse(string);
return result; */

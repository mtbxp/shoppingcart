const getSavedCartItems = async () => {
  try {
    const string = localStorage.getItem('cartItems');
    const result = await JSON.parse(string);
    console.log(await result);
    return result;    
  } catch (error) {
    throw new Error(error);   
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

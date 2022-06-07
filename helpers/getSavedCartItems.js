const getSavedCartItems = (arrayOfParameters) => {
  if (arrayOfParameters) {
    const arrayOfParametersParse = JSON.parse(arrayOfParameters);
    return arrayOfParametersParse;
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

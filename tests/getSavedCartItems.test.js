const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('ao chamar a função com o argumento, o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();  
  });
  test('ao chamar a função com o argumento, o método localStorage.getItem é chamado com o ,cartItems, como parâmetro',  () => {
    saveCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith(cartItems);  
  });
});

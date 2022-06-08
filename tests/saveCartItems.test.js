const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const param = '<ol><li>Item</li></ol>'
  
  test('ao chamar a função com o argumento, param, a função localStorage.setItem é chamada', () => {
    saveCartItems(param);
    expect(localStorage.setItem).toHaveBeenCalled();  
  });

  test('ao chamar a função com o argumento, param, a função localStorage.setItem é chamada com dois parametros',  () => {
    saveCartItems(param);
    expect(localStorage.setItem).toHaveBeenCalledWith(cartItems, param);  
  });
});

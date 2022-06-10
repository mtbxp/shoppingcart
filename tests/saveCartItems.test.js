const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const parameter1 = '<ol><li>Item</li></ol>';
  const parameter2 = 'cartItems';
  const actual = localStorage.setItem;

  test('verifica se a localStorage.setItem foi chamada, ao executar a função saveCartItems com o argumento "<ol><li>Item</li></ol>"', () => {
    saveCartItems(parameter1);
    expect(actual).toBeCalled();
  });

  test('verifica se a localStorage.setItem foi chamada, com os argumentos "<ol><li>Item</li></ol>" e "cartItems"', async () => {
    saveCartItems(parameter1);
    expect(actual).toBeCalledWith(parameter2, parameter1);
  });
});

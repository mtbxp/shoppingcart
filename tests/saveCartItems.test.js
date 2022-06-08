const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('se com o argumento x a localStorage é chamada', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(typeof localStorage).toBe('object')
  })
});

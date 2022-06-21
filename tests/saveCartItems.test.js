const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('localStorage.setItem deve ser chamado quando a função for executada com o argumento "<ol><li>Item</li></ol>"', () => {
    expect(saveCartItems('<ol><li>Item</li></ol>')).toHaveCalledWith(localStorage.setItem())
  })
  
});

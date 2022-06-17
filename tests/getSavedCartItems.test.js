const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Quando executada com argumento \'<ol><li>Item</li></ol>\' o método localStorage é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect((localStorage.setItem)).toHaveBeenCalled();
  });
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Deveria chamar localStorage.getItem quando getSavedCartItems é chamado', () => {
    expect.assertions(1);
    const keyName = 'catItems';
    getSavedCartItems(keyName);
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Se ao chama-la fetch tambem e chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  })
  it('Se ao chama-la fetch utiliza o endpoint', () => {
    saveCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartitems');
  })
});

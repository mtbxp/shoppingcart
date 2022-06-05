const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('testando se getSavadCartItems é uma função', () => expect(typeof getSavedCartItems).toBe('function'));
  
  it('testando se quando getSavedCartItems é executada o localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  it('testando se quando getSavadCartItems é executado, o localStorage.getItem é chamado com o argumento correto', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

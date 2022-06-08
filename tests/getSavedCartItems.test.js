const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se o metodo localstorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledTimes(1);
  });

  it('Testa se o parametro do getItem estão corretos', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });

  it('Testa o retorno da função quando o localstorage está vazio', () => {
    expect(getSavedCartItems()).toBe(undefined);
  });

  it('Testa o retorno quando vem algo no localstorage', () => {
    localStorage: 'cartItems:ola'
    
    expect(getSavedCartItems()).toBe(Object);
  })
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se getSavedCartItems é uma função', () => {
    expect(typeof getSavedCartItems).toBe()
  })
  
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {

  });
});

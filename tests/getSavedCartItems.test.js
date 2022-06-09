const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se saveCartItems é uma função', () => {
    expect(typeof getSavedCartItems).toBe('function');
    })
    it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
      expect(getSavedCartItems).toHaveBeenCalled();
    })
    it(`Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o 'cartItems' como parâmetro`, () => {
      const result = getSavedCartItems(localStorage.getItem)
      expect(result).toHaveBeenCalledWith(getSavedCartItems);
    })
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('se a função funciona', () => {
    const resultado = getSavedCartItems()
    expect(resultado).toBe(undefined)
  })
});
// npm test getSavedCartItems
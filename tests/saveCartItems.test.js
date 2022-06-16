const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // Para os testes abaixo foi recebido a orientação do instrutor Victor Felipe Ramos Saraiva da Trybe
  test('se ao executar a função com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    // para 'localStorage.setItem' foi consultado o site (https://www.npmjs.com/package/jest-localstorage-mock)
    const actual = '<ol><li>Item</li></ol>';
    saveCartItems(actual);
    expect(localStorage.setItem).toBeCalled();
  });
  test('se ao executar a função com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros', () => {
    const actual = '<ol><li>Item</li></ol>';
    saveCartItems(actual);
    expect(localStorage.setItem).toBeCalledWith('cartItems', actual);
  });
});

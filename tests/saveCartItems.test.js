const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Testa se saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function');
  });

  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    expect.assertions(1); 
    saveCartItems('<ol><li>Item<li><ol>');
    expect((localStorage.setItem)).toHaveBeenCalled();
  });

  test('Verifica se quando a função é chamada com um parâmetro válido o método do localStorage `setItem` é chamado com os parâmetros corretos', () => {
    const param = '<ol><li>Item<li><ol>'
    saveCartItems(param);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', param);
  });
});

// Estudar mais localStorage
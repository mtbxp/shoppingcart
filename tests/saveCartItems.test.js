const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  const testFunc = saveCartItems('<ol><li>Item</li></ol>');
  const testMeto = localStorage.setItem;
  it('Teste se, ao executar a função com o argumento -testeFunc- o metodo é chamado', () =>{
    testFunc;
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Teste se, ao executar a função com o argumento -testFunc-, o metodo é chamado com dois parametros, sendo cartitens e o parametro da função', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});

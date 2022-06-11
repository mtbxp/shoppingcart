const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  const testFunc = getSavedCartItems();
  const testMeto = localStorage.setItem;
  it('Teste se, ao executar a função com o argumento -testeFunc- o metodo é chamado', () =>{
    testFunc;
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Teste se, ao executar a função com o argumento -testFunc-, o metodo é chamado com o parametro cartitens', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems');
  });
});

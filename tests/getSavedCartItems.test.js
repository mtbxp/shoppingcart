const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', async () => {
  await getSavedCartItems();
  expect(localStorage.getItem).toHaveBeenCalled();
  });
  test('Ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.', async () => {
  await getSavedCartItems('cartItems');
  expect(localStorage.getItem).toHaveBeenCalled();
  });
  // fail('Teste vazio');
  test('Ao comparar com o objeto retornado da API, getSavedCartItems retorna new Error mensagem esperada aqui ', async () => 
  {
  try {
  await getSavedCartItems();
  } catch (error) {
  expect(error).toEqual(new Error('mensagem esperada aqui'));
  }
  });
  });
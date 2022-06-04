require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  //fail('Teste vazio');
  test('Testar se fetchItem se é uma "função"', () => {
    expect(typeof fetchItem).toEqual("function");
   });
});

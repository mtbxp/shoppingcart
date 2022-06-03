require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('testa de fetchSimulator é uma funão', () => {
    expect(typeof fetchItem()).toBe(Function);
  })
  test('Testa se quando passado computador o fetch é chamado', () => {
    expect(fetchItem('computador')).toHaveBeenCalled();
  })
});

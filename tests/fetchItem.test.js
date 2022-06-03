require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('has been called', () => {
    fetchItem('computador');
    expect(fetch).toBeCalled();
  });
});

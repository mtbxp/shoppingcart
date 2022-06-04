require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Deveria falhar se fetchItem não for uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });
});

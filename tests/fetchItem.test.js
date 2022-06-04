require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Deveria falhar se fetchItem não for uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  it('Deveria ser capaz de invocar a função fecth.', async () => {
    expect.assertions(1);
    const productid = 'MLB1615760527';
    await fetchItem(productid);
    expect(fetch).toHaveBeenCalled();
  });
});

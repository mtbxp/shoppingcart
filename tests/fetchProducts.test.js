require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Deveria falhar se fetchProducts não for uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });

  it('Deveria ser capaz de invocar a função fecth.', async () => {
    expect.assertions(1);
    const queryTerm = 'computador';
    await fetchProducts(queryTerm);
    expect(fetch).toHaveBeenCalled();
  });
});

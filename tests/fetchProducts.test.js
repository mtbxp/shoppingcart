require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Testa se vem a mensagem de erro caso não tenha parametro', async () => {
    await expect(fetchProducts()).rejects.toThrow('You must provide an url')  ;
  });

  it('Testa se é uma estrutura igual ao computadorSearch', async () => {
    await expect(fetchProducts('computador')).resolves.toEqual(computadorSearch.results)
  });
}); 

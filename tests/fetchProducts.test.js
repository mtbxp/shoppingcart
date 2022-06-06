require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Testa se ao chamar fetchProducts o fetch foi chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se ao chamar fetchProducts a função utiliza o endpoint esperado', async () => {
    await fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Testa se ao chamar fetchProducts a função retorna o esperado', async () => {
    const store = await fetchProducts('computador');
    expect(store).toEqual(computadorSearch.results);
  });
  it('Testa se ao chamar fetchProducts sem parâmetros retorna um erro específico', async () => {
    const store = await fetchProducts();
    expect(store).toEqual(new Error('You must provide an url'));
  });
});

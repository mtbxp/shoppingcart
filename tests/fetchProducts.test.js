require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Testa a função fetchProducts', () => {

  it('Testa se "fetchProducts" é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Testa se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Testa se fetch utiliza o end point correto', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Testa se o retorno da função fetchProducts é igual ao computadorSearch', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });

  it('Testa se ao chamar a função fetchProducts sem argumento, retorna um erro com mensagem', async () => {
    const result = await fetchProducts();
    expect(result).toEqual(new Error('You must provide an url'));
  });
});

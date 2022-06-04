require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Teste se fetch foi chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('Teste se o retorno é igual ao objeto computadorSearch', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });
  it('Teste se retorna um erro ao achamar a função sem parâmetro', async () => {
    const msg = 'You must provide an url';
    const response = await fetchProducts();
    expect(response).toEqual(new Error(msg));
  });
});

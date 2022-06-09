require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('1 Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('2 A função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('3 Ao chamar a função fetchProducts com o argumento "computador"', async () => {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith(ENDPOINT);
  })
  it('4', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  })
  it('5', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  })
});

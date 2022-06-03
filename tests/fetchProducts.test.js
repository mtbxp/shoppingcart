require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('2 - Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('3 - Com o argumento "computador", a função fetch deve ser chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('4 - Com o argumento "computador", a função fetch deve ser chamada com endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith(endpoint);
  })

  it('5 - Deve retornar um objeto com as propriedades esperadas', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });
});

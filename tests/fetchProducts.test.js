require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa função FetchProducts com o argumento "computador", verifica se ela foi chamada e se o seu o url é "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')

  });
  it('Verifica e a função fetchSimulator é uma função', () => {
    expect(typeof fetchProducts)
    .toBe('function');
  });
  it('Caso o parametro esteja errado precisa retornar "You must provide an url"', async () => {
    const verifica = await fetchProducts()
    expect(verifica)
    .toEqual(new Error('You must provide an url'))
  });
});

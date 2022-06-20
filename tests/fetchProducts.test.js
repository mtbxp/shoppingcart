require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Verifica se FETCH é chamada quando passado "computador" como argumento', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it('Verifica se ao chamar fetchProducts "computador" a fetch utiliza o endpoint', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url);
  });
  it('Verifica se o retorno da fetchProducts com "computador" é objeto assim como computadorSearch', async () => {
    await fetchProducts('computador');
    expect(typeof await fetchProducts('computador')).toBe(typeof computadorSearch);
  });
  it('Verifica se retorna erro ao chamar fetchProducts sem argumento', async () => {
    await fetchProducts();
    expect ( await fetchProducts()).toEqual(new Error (`You must provide an url`));
  })
});

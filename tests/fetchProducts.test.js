require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  const fetchProductsFunction = fetchProducts;
  it('Verifica se fetchProdutcs é uma função', () => {
    expect(typeof (fetchProductsFunction)).toBe('function');
  });
  it('Ao rodar com parametro \'computador\' verifica se fetch foi chamada.', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifica se o endpoint correto é utilizado por fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  }) 
});

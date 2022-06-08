require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search')

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
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Verifica se a estrutura de dados de computadorSearch é a mesma do retorno da função', async () => {
    const retorno = await fetchProducts('computador');
    expect(retorno).toStrictEqual(computadorSearch);
  });
  it('Verifica se a função da erro caso não seja passado nenhum argumento', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});

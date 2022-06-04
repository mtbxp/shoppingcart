require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('a função fetchProducts chamada com o argumento "computador",ver se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url);
  });
  it('se o retorno da função fetchProducts é igual ao objeto computadorSearch', async () =>{
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });
  it('com o argumento vazio, retorna um erro com a mensagem esperada', async () =>{
    const response = await getMagicCard();
    expect(response).toEqual(new Error('You must provide an url'));
  });
  // fail('Teste vazio');
});

require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
/*
referencia:documentaçao do jest
https://jestjs.io/docs/expect#tohavebeencalled
*/


describe('1 - Teste a função fetchProducts', () => {
  it('E uma função', () => {
    const product = typeof fetchProducts; 
    expect(product).toBe('function');
  })
  it('Se ao chama-la fetch tambem e chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  })
  it('Se ao chama-la fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador ', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('Se o seu retorno e iqual a computadorSearch', async () => {
    const product = await fetchProducts('computador');
    expect(product).toEqual(computadorSearch);
  })
  it('Se ao chama-la sem parametros retona um erro', async () => {
    try {
      await fetchProducts('');
    } catch (error) {
      expect(error).toBe('You must provide an url');
    }
  });
});

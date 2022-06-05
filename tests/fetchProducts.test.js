require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toEqual('function')
  }) // ta ok

  it('Se a fetchProducts c argumento "computador" e ver se "fetch" foi chamado', async () => {
    const resultFetch = await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  }) // ta ok

  it('Se a funtion fetchProducts com o argumento "computador" fetch utiliza o end point https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const arg = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url)
  })

  it('Se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao projeto "computadorSearch"', async () => {
    const produtox = await fetchProducts('computador')
    expect(produtox).toEqual(computadorSearch);
  })

  it('Se a função fetchProducts, sem argumento, retorna um erro com a mensagem "You must provide an url"', async() => {
    try {
      const url = await fetchProducts(undefined)
    } catch(error) {
      expect(error).toBe('You must provide an url')
    }
  }) // ta ok
});

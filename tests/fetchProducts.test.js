require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('1-Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('2-Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('3-Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('4-Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const fnTestComp = await fetchProducts('computador')
    expect(fnTestComp).toEqual(computadorSearch)
  })
  it('5-Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const fnTestErr = await fetchProducts();
    expect(fnTestErr).toEqual(new Error('You must provide an url'))
  })
});

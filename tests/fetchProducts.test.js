require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it(`Execute a função fetchProducts com o argumento 'computador' e teste se fetch foi chamada`, () => {
    fetchProducts('computador');
    expect(fetch).toBeCalled();
  })

  it(`Teste se fetchProducts é uma função`, () => {
    expect(typeof fetchProducts).toBe('function')
  })

  it(`Teste se, ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador'`, () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })

  // it(`Teste se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.`, () => {
    
  // })

  // it(`Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'`, () => {
  //   expect(() => {
  //     fetchProducts()}).toThrow('You must provide an url');
  // });
});

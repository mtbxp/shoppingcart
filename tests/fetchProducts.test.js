require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Teste se fetchProducts é uma função', () =>{
    expect(typeof fetchProducts).toEqual('function')
  })
  it('Execute a função fetchProducts com o argumento', async() =>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('Execute a função fetchProducts com o argumento', async() =>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');

  })

  
});

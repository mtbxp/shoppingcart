require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const messageError = new Error('Você deve fornecer um url');

describe('1 - Teste a função fetchProducts', () => {   
  it('Testa se fetchProducts é function', () => expect(typeof fetchProducts).toBe('function'));

  it('Testa se fethProducts recebe computer como argumento e se foi usado', async () => {    
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Testa se chamando fetchProducts(computador) é utilzado o endpoint certo', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
});

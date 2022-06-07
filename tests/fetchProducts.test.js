require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Should be a function', async () => {
    const result = fetchProducts;
    
    expect(typeof result).toBe('function');
  });
  // it('Should be a function', async () => {
  //   const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    
  //   fetchProducts('computador');
  //   expect(fetch).toHaveBeenCalledWith(URL);
  // });
});

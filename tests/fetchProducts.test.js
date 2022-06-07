require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {   
  it('Testa se fetchProducts é function', () => expect(typeof fetchProducts).toBe('function'));

  it('Testa se fethProducts recebe "computador" como argumento e se foi usado', async () => {    
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Testa se chamando fetchProducts(computador) é utilzado o endpoint certo', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Testa se a funçao fetchProductos retorna um objeto igual ao objeto computadorSearch, quando recebe "computador"', async() => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  it('Testa se a função fecthProducts retonar msg de erro: "you must provide an url", quando chamada sem argumento', async () => {
    await expect(fetchProducts()).rejects.toThrow(new Error('You must provide an url'))
  });
});
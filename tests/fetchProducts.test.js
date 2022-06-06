require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('é uma função', () =>{
    expect(typeof fetchProducts).toBe('function');
  });
  test('ao chamar a função com o argumento, computador, a função fetch é chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();  
  });
  test('ao chamar a função com o argumento, computador, a função utiliza o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);  
  });
  test('ao chamar a função com o argumento, computador, a função retorna um objeto', async () =>{
    await expect(fetchProducts('computador')).resolves.toEqual(computadorSearch);  
  });
  test('ao chamar a função sem argumento, retorna um erro', async () =>{
    await expect(fetchProducts()).rejects.toThrow('You must provide an url');  
  });
});

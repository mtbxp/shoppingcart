const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('01-Testar se e uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('02-testar se com argumento computador chama fetch', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('03-testar se com argumento computador chama fetch',async () => {
    fetchProducts('computador');
   await expect(fetch).toHaveBeenCalled();
  });
  it('04- se a função e igual a computador search', async() => {
    const expec = await fetchProducts('computador')
    const retorno = computadorSearch
    expect(expec).toEqual(retorno)
  })
  it('05-Se chamar a função sem parametro retorna erro', async () => {
    const func = await fetchProducts('');
    const msg = 'You must provide an url'
   await expect(func).toEqual(new Error(msg))
  })
});

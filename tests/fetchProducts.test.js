require('../mocks/fetchSimulator');
const { fetchProducts, getComputer } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Verifica se fetchProduct é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('Verifys if fetchProduct whith "computador" will be called', async () => {
    const resultado = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('Teste se ao chamar a função com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"' , async () => {
    const resultado = await fetchProducts('computador')
    const url = getComputer('computador');
    expect(fetch).toBeCalledWith(url);
  } )

  test('Se ao chamar a funcao sem nenhum argumento, retorna o erro "You must provide an url"' , async () => {
    try{
    await fetchProducts()
    expect(true).toBe(false)
    } catch (error) {
    expect(error).toEqual(new Error('You must provide an url'))
    }
  })
  // fail('Teste vazio');
});

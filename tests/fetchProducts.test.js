require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Verifica se `fetchProducts` é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  test('Deve chamar `fetch` quando o argumento `computador` for passado', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });
  test('Deve retornar o endpoiont correto ao passar o argumento `computador` para a função', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url);
  });
  test('Deve se a função retorna a mesma estrutura de dados do objeto `computadorSearch`', async () => {
    const dados = await fetchProducts('computador');
    expect(dados).toEqual(computadorSearch);
  });
  test('Deve retornar uma mensagem de error ao passar a função sem nenhum argumento', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });

});

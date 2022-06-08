require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('deve retornar uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('se a função é chamada ao ser executada com o argumento `computador`', async () => {
    // para o método 'toBeCalled' foi consultado a documentação no Jest (https://jestjs.io/pt-BR/docs/expect#tohavebeencalled)
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  test('se ao chamar a função com o argumento `computador` é utilizado o endpoint correto', async () => {
    // para o método 'toBeCalledWith' foi consultado a documentação no Jest (https://jestjs.io/pt-BR/docs/expect#tohavebeencalledwitharg1-arg2-)
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(endpoint);
  });
  test('o retorno da função com o argumento `computador`', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  test('se é retornado uma mensagem de erro ao passar a função sem argumentos', async () => {
    // para esse teste foi consultado o vídeo 'Jest - Testes Assíncronos' na aula 9.3 do curso da Trybe
    await expect(fetchProducts()).rejects.toThrow(new Error ('You must provide an url'));
  });
});

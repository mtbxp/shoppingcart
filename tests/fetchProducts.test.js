require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts foi definido', () => {
    expect(fetchProducts).toBeDefined();
  });

  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Verifica se a função retorna um erro caso o parâmetro passado não seja uma string', async () => {
    const notAString = 1;
    await expect(fetchProducts(notAString)).rejects.toThrow(new Error('O parâmetro deve ser uma string'));
  });

  it('Verifica que se nenhum parâmetro for passado para a função, é lançado um erro', async () => {
    await expect(fetchProducts()).rejects.toThrow(new Error('You must provide an url'));
  });

  it('Verifica se ao passar um parâmetro válido para a função a função fetch é chamada', async () => {
    const validParam = 'computador';
    await fetchProducts(validParam);
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se a função fetch utiliza o endpoint correto', async () => {
    const validParam = 'computador';
    const expectedEndPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts(validParam);
    expect(fetch).toHaveBeenCalledWith(expectedEndPoint);
  });

  it('Verifica se o retorno da função é um objeto com a estrtura igual ao esperado', async () => {
    const validParam = 'computador';
    await expect(fetchProducts(validParam)).resolves.toEqual(computadorSearch);
  });
});

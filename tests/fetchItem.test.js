require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem foi definindo', () => {
    expect(fetchItem).toBeDefined();
  });

  it('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica se é lançado uma exceção quando o parâmetro passado não é uma string', async () => {
    const notAString = 1233;
    await expect(fetchItem(notAString)).rejects.toThrow(new Error('O parâmetro passado deve ser uma string'));
  });

  it('Verifica se quando um parâmetro válido é passado a função fetch é chamada', async () => {
    const validParam = 'MLB1615760527';
    await fetchItem(validParam);
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se quando um parâmetro válido é passado a função fetch utiliza o endpoint correto', async () => {
    const validParam = 'MLB1615760527';
    const expectedEndpoint = `https://api.mercadolibre.com/items/${validParam}`;
    await fetchItem(validParam);
    expect(fetch).toHaveBeenCalledWith(expectedEndpoint);
  });

  it('Verifica se nenhum parâmetro for passado é lançado uma exceção', async () => {
    await expect(fetchItem()).rejects.toThrow(new Error('You must provide an url'));
  });

  it('Verifica se o retorno da função é um objeto com a estrutura correta', async () => {
    const validParam = 'MLB1615760527';
    await expect(fetchItem(validParam)).resolves.toEqual(item);
  });
});

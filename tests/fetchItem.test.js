require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('testa se o retorno da função é igual ao item', async () => {
    await expect(fetchItem('MLB1615760527')).resolves.toEqual(item);
  });

  it('Testa se vem a mensagem de erro caso não tenha parametro', async () => {
    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});

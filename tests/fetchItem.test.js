require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Testa se é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('Testa se feath foi chamado com argumento MLB1615760527', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toBeCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  })
  it('Testa se ao argumento MLB1615760527 retorna uma estrutura igual ao item', async () => {
    const resp = await fetchItem("MLB1615760527")
    expect(resp).toEqual(item);
  })
  it('Sem argumento retorna erro', async () => {
    try {
      await fetchItem();
    } catch (erro) {
      expect(erro).toEqual(new Error('You must provide an url'));
    }
  })
});

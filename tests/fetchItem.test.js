require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Teste se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Execute a função fetchItem("MLB1615760527") para ver se fetch foi chamada', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });

  it('Execute a função fetchItem("MLB1615760527") conferir o endpoint correto', async () => {
    await fetchItem("MLB1615760527");
    expect.assertions(1);
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Teste fetchItem("MLB1615760527") === item', async () => {
    const response =  await fetchItem("MLB1615760527");
    expect(typeof response).toEqual(typeof item);
  });

  it('Teste fetchItem() retorna erro', async () => {
    try {
      await fetchItem();
    } catch (err) {
      expect(err).toEqual(new Error('You must provide an url'));
    }
    
  });
});

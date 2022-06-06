require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('Teste a função fetchItem', () => {
  it('1 - Deve ser uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('2 - Com o argumento "MLB1615760527", a função fetch deve ser chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('3 - Com o argumento "MLB1615760527", a função fetch deve ser chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('computador');
  });
  it('4 - Deve retornar um objeto com as propriedades esperadas', async () => {
    const response = await fetchItem('computador');

    expect(response).toEqual(computadorSearch);
  });
  it('5 - Sem argumento, deve retornar um erro com a mensagem esperada', async () => {
    const response = await fetchItem();

    expect(response).toEqual(new Error('You must provide an url'));
  });
});

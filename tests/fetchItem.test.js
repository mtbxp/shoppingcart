require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchItem();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

  it('Verifica se retorna ao executar a função sem parâmetro', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se a função fetchItem foi chamada com o endpoint correto', async () => {
  const url = `https://api.mercadolibre.com/items/MLB1615760527`;
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalledWith(url);
  })

  it('verifica se o retorno é igual a MLB1615760527', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item)
  });
});

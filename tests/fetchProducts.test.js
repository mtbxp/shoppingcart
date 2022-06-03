require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Verifica se o fetch é chamado na função fetchProducts', async () => {
    await fetchProducts('compu');
    expect(fetch).toBeCalled();
  });

  it('Verifica se ao chamar ela vem com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Verifica se ao chamar a função com o param \'computador\' ela o retorno é igual a computadorSearch', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });

  it('Verificas se a função sem parametros retorna um erro', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'))
  });
});

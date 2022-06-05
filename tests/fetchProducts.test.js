require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifique se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
  });

  it('Verifica se ao executar a função fetchProducts com o argumento computador, fetch é chamada', async () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se ao chamar a função fetchProducts com o argumento computador, fetch utiliza o endpoint URL', async () => {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=computador`
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Verifica se o retorno da função fetchProducts com o argumento computador, a resposta é igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  it('Verifica se ao chamar a função fetchProducts sem argumento, retorna uma mensagem de erro', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
  });

})


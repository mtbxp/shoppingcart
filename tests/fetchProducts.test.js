require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifique se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
  });

  it('Verifique se ao receber ao receber a função fetchProducts ao receber o argumento computador chama a fetch', async () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifique se ao receber ao receber a função fetchProducts ao receber o argumento computador o fetch utiliza o endpoint pedido', async () => {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=computador`
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Verifique se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  it('Verifique se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem "You must provide an url"', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
  });

})

require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
describe('2 - Teste a função fetchItem', () => {
  it('Verifique se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  });

 it('Verifica se ao executar a função fetchItem com o argumento MLB1615760527, fetch é chamada', async () => {
   fetchItem('MLB1615760527');
   expect(fetch).toHaveBeenCalled();
   });

 it('Verifica se ao chamar a função fetchItem com o argumento MLB1615760527, fetch utiliza o endpoint URL', async () => {
   const endpoint = `https://api.mercadolibre.com/items/MLB1615760527`;
  fetchItem('MLB1615760527');
   expect(fetch).toHaveBeenCalledWith(endpoint);
    });

 it('Verifica se o retorno da função fetchItem com o argumento MLB1615760527, é uma estrutura de dados igual ao objeto item que já está importado no arquivo', async ()  => {
  expect(await fetchItem('MLB1615760527')).toEqual(item);
    });

  it('Verifica se ao chamar a função fetchProducts sem argumento, retorna uma mensagem de erro', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
    });

});

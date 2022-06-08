require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it ("Testa se a função fetchItem é uma função", () => {
    expect(typeof fetchItem).toBe('function');
    });

  it ("Execute a função fetchItem com o argumento do item 'MLB1615760527' e teste se fetch foi chamada", async () => {
     await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
    });

  it ("Testa se, ao chamar a função fetchItem com o argumento 'MLB1615760527', a função fetch utiliza o endpoint correto", async () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    const resultFetchItem = await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
     });

  it ("Testa se o retorno da função fetchItem com o argumento 'MLB1615760527' é uma estrutura de dados igual ao objeto 'item' ", async () => {
      const resultFetchItem= await fetchItem('MLB1615760527');
      expect(resultFetchItem).toEqual(item); 
     });

  it ("Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async () => {
      //await expect(fetchItem()).rejects.toThrow('You must provide an url');
      try {
        await fetchItem();
      } catch (error) { 
      expect(error).toEqual(new Error('You must provide an url'));
      }
     });
});

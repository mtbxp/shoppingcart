require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
describe('2 - Teste a função fetchItem', () => {
 test('se é uma função', async () => {
   await expect(typeof fetchItem).toBe('function')
 });
 test('testa se a fetch foi chamada', async () => {
   await fetchItem("MLB1615760527");
   expect(fetch).toHaveBeenCalled();
 });
 test(' ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
   await fetchItem("MLB1615760527");
   expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
 });
 test('se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo', async () => {
  await expect(fetchItem("MLB1615760527")).resolves.toEqual(item)
 });
 test("se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async () => {
   await expect(fetchItem()).rejects.toThrow('You must provide an url')
 });
});

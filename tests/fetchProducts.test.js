require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
console.log(fetchProducts)
describe('1 - Teste a função fetchProducts', () => {
  test('se é uma função' , () => {
    expect(typeof fetchProducts).toBe('function')
  } );
 test('a função com argumento "computador" e se a featch foi chamada', () => {
   expect(typeof fetchProducts("computador")).toBe("object")
 });
 test(' se a fetch usa end point "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
  await fetchProducts("computador").then( data => expect(data.site_id).toBe("MLB"));
});
test(' se a função com argumento "computador" tem uma estrutura de dados igual a computadorSearch', async () => {
  await expect(fetchProducts("computador")).resolves.toEqual(computadorSearch)
});
test('quando chamada a função sem parametro da erro', async () =>{
  await expect(fetchProducts()).rejects.toThrow('You must provide an url');
});
});

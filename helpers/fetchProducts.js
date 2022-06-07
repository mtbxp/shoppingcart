const fetchProducts = () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';

  const products = fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

    return products;
};

//  const setCoins = async () => {
//  const coins = await fetchCoins();

 // const coinsList = document.getElementById('coins-list');

  //  coins.forEach((coin) => {
    //  const newLi = document.createElement('li');
    //  const usdPrice = Number(coin.priceUsd);

    //  newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    //  coinsList.appendChild(newLi);
  //  });
//  }

window.onload = () => fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

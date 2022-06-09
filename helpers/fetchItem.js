const creatUrlInfos = (urlInfo) => `https://api.mercadolibre.com/items/${urlInfo}`;

const fetchItem = async (urlInfo) => {
  await fetch(creatUrlInfos(urlInfo));
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

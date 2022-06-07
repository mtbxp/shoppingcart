const fetchItem = (param) => {
  if (!param) throw new Error('You must provide an url');
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

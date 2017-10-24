const Bitly = require('bitly');

const bitly = new Bitly('13fc4c68a0527ed9cdcc38a020ecf50a6e6b6887');

const shorten = (link) => {
  bitly.shorten(link)
    .then( response => {
      if (response.status_code === 200) {
        console.log('');
        console.log('Short link:', response.data.url);
        console.log('');
      } else {
        console.log('');
        console.log('Error occurred:', response);
        console.log('');
      };
    });
};

module.exports = { shorten };

const Bitly = require('bitly');

const bitly = new Bitly('13fc4c68a0527ed9cdcc38a020ecf50a6e6b6887');

const protocolCheck = (link) => {

  // Bitly API will return error if url has no protocol
  // ^http[s]?\:\/\/
  if (!(/^[^:]+(?=:\/\/)/).test(link)) {
    return "http://" + link;
  } else {
    return link;
  }

};

const shorten = (link) => {
  let verifiedLink = protocolCheck(link);

  bitly.shorten(verifiedLink)
    .then( response => {
      if (response.status_code === 200) {

        console.log('');
        console.log(response);
        console.log('');
      } else {
        console.log('');
        console.log('Error occurred:', response);
        console.log('');
      };
    });
};

const expand = (link) => {
  let verifiedLink = protocolCheck(link);

  bitly.expand(verifiedLink)
    .then( response => {
      if (response.data.expand[0].error) {
        console.log('');
        console.log('Error occurred:', response.data.expand[0]);
        console.log('');
      } else {
        if (response.status_code === 200) {

          console.log('');
          console.log(response);
          console.log('');
        };
      };
    });
};

module.exports = { shorten, expand };

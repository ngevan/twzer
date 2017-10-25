const Bitly = require('bitly');
const Table = require('cli-table');
const chalk = require('chalk');

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
        let table = new Table({
          style: {head: ['green'], border: ['white']},
        });

        table.push(
          { 'SHORT LINK:': response.data.url }
        );

        console.log('');
        console.log(table.toString());
        console.log('');
      } else {
        console.log('');
        console.log(chalk.red('Error occurred:'), response);
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
        console.log(chalk.red('Error occurred:'), response.data.expand[0]);
        console.log('');
      } else {
        if (response.status_code === 200) {
          let table = new Table({
            style: {head: ['green'], border: ['white']},
          });

          table.push(
            { 'LONG LINK:': response.data.expand[0].long_url }
          );

          console.log('');
          console.log(table.toString());
          console.log('');
        };
      };
    });
};

module.exports = { shorten, expand };

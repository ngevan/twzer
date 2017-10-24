const bitly = require('../clients/bitly');
const google = require('../clients/google');

const shorten = function(program) {
  program
    .command('shorten <link>')
    .alias('sh')
    .description('Shorten a long link.')
    .option('-b, --bitly', 'Use Bitly to shorten a long link.')
    .option('-g, --google', 'Use Google to shorten a long link.')
    .action( (link, option) => {
      if (option.bitly) bitly.shorten(link);
      if (option.google) google.shorten(link);
    });
};

module.exports = shorten;

const bitly = require('../clients/bitly');
const google = require('../clients/google');

const expand = function(program) {
  program
    .command('expand <link>')
    .alias('ex')
    .description('Expand a shortened link.')
    .option('-b, --bitly', 'Use Bitly to expand a shortened link.')
    .option('-g, --google', 'Use Google to expand a shortened link.')
    .action( (link, option) => {
      if (!option.google && !option.bitly) bitly.expand(link);
      if (option.bitly) bitly.expand(link);
      if (option.google) google.expand(link);
    });
};

module.exports = expand;

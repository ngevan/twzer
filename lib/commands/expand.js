const bitly = require('../clients/bitly');

const expand = function(program) {
  program
    .command('expand <link>')
    .alias('ex')
    .description('Expand a shortened link.')
    .option('-b, --bitly', 'Use Bitly to expand a shortened link.')
    .action( (link, option) => {
      if (option.bitly) bitly.expand(link);
    });
};

module.exports = expand;

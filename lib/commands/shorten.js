const shorten = function(program) {
  program
    .command('shorten <link>')
    .alias('sh')
    .description('Shorten a long link.')
    .option('-b, --bitly', 'Use Bitly to shorten a long link.')
    .action( (link, option) => {
      // placeholder for bitly api
      if (option.bitly) bitly.shorten(link);
    });
};

module.exports = shorten;

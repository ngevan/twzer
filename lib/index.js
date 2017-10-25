#!/usr/bin/env node

const program = require('commander');
const shorten = require('./commands/shorten')(program);
const expand = require('./commands/expand')(program);
const packageJson = require('../package.json');
const chalk = require('chalk');

program
  .version(packageJson.version)
  .description('URL shortener and expander tool (Bitly set as default).')
  .usage('<command> [option] <argument>')
  .helpInformation = function() {
    return [
      '',
      chalk.white(' URL shortener and expander tool (Bitly set as default).'),
      '',
      chalk.white(' Usage:'),
      '',
      '    ' + this._name + ' ' + this.usage(),
      '',
      chalk.white(' Options:'),
      '',
      this.optionHelp().replace(/^/gm, '    '),
      '',
      chalk.white(' Commands:'),
      '',
      '    shorten | sh [option] <argument>   Shorten a long link.',
      '    expand  | ex [option] <argument>   Expand a shortened link.',
      '',
      ''
    ].join('\n');
  };

program.parse(process.argv);

// check for errors
if (process.argv.length === 2) {
  program.help();
};

if (!validateCommand(process.argv.slice(2)[0])) {
  console.log('');
	console.log(`  ${chalk.red('error:')} invalid command '${process.argv.slice(2).join(' ')}'. Enter '-h' for help.`);
  console.log('');
};

function validateCommand(input) {
  const commands = ['sh', 'shorten', 'ex', 'expand'];

  return commands.includes(input);
}

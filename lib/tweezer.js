#!/usr/bin/env node

const program = require('commander');
const shorten = require('./commands/shorten')(program);
const packageJson = require('../package.json');

program
  .version(packageJson.version)
  .description('URL shortener and expander tool (Bitly set as default).')
  .usage('<command> [option] <argument>')
  .helpInformation = function() {
    return [
      '',
      ' URL shortener and expander tool (Bitly set as default).',
      '',
      ' Usage:',
      '',
      '    ' + this._name + ' ' + this.usage(),
      '',
      ' Options:',
      '',
      this.optionHelp().replace(/^/gm, '    '),
      '',
      ' Commands:',
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

const Google = require('googleapis');
const urlshortener = Google.urlshortener('v1');
const Table = require('cli-table');
const chalk = require('chalk');

const KEY = 'AIzaSyA9T-ATX6qHS44tiCkLj6ZbbL0mpmlXE3c';

const printShortenedResult = (error, response) => {
  if (error) {
    console.log('');
    console.log(chalk.red('Error occurred: \n'), error.errors);
    console.log('');
  } else {
    let table = new Table({
      style: {head: ['green'], border: ['white']},
    });

    table.push(
      {'SHORT LINK:': response['id'] }
    );

    console.log('');
    console.log(table.toString());
    console.log('');
  };
};

const printExpandedResult = (error, response) => {
  if (error) {
    console.log('');
    console.log(chalk.red('Error occurred: \n'), error.errors);
    console.log('');
  } else {
    let table = new Table({
      style: {head: ['green'], border: ['white']},
    });

    table.push(
      {'LONG LINK:': response['longUrl'] }
    );

    console.log('');
    console.log(table.toString());
    console.log('');
  };
};

const shorten = (link) => {
  urlshortener.url.insert({
    'auth': KEY,
    'resource': {
      'longUrl': link
    }
  }, printShortenedResult);
};

const expand = (link) => {
  urlshortener.url.get({
    'auth': KEY,
    'shortUrl': link
  }, printExpandedResult);
};

module.exports = { shorten, expand };

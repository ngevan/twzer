const Google = require('googleapis');
const urlshortener = Google.urlshortener('v1');

const KEY = 'AIzaSyA9T-ATX6qHS44tiCkLj6ZbbL0mpmlXE3c';

const printShortenedResult = (error, response) => {
  if (error) {
    console.log('');
    console.log('Error occurred: \n', error.errors);
    console.log('');
  } else {
    console.log('');
    console.log(response['id']);
    console.log('');
  };
};

const printExpandedResult = (error, response) => {
  if (error) {
    console.log('');
    console.log('Error occurred: \n', error.errors);
    console.log('');
  } else {
    console.log('');
    console.log(response['longUrl']);
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

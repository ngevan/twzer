const Google = require('googleapis');
const urlshortener = Google.urlshortener('v1');

const KEY = 'AIzaSyA9T-ATX6qHS44tiCkLj6ZbbL0mpmlXE3c';

const printResult = (error, response) => {
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

const shorten = (link) => {
  urlshortener.url.insert({
    'auth': KEY,
    'resource': {
      'longUrl': link
    }
  }, printResult);
};

module.exports = { shorten };

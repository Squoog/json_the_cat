const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'http://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("unable to find breed", null);
      return;
    }
    if (data[0]['name'] === breedName) {
      callback(null, data[0]['description']);
    }
  });
};

module.exports = {fetchBreedDescription};


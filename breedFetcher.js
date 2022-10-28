const request = require('request');

const breedFetcher = (url) => {
  request.get(url, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('Not found');
      return;
    }

    console.log(data[0]['description']);
  })
}

const breed = process.argv.slice(2);
breedFetcher(`http://api.thecatapi.com/v1/breeds/search?q=${breed}`);
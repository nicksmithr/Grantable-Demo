console.log('Hello');
var axios = require('axios');

axios.get('http://data.threesixtygiving.org/data.json')
  .then(function (response) {
    forLoop(response);
  })
  .catch(function (error) {
    console.log(error);
  });

function forLoop(response) {
  // for (var i = 0; i < response.data.length; i++) {
    console.log(response.data[2]);
  // }
}

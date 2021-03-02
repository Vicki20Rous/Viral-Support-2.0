var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/',
  headers: {
    'x-rapidapi-key': '22539d0047mshaba23ae76c1a0c3p1d7388jsn5281cea1a33d',
    'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
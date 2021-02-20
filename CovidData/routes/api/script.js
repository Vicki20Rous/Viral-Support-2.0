const axios = require("axios").default
const Parser = require ("rss-parser")
const parser = new Parser()
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('96c41822c5bd447d90a6023f747bf769');

const Covid19Update = {
    getUpdate: (country) => {
      var options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/totals',
        headers: {
          'x-rapidapi-key': '22539d0047mshaba23ae76c1a0c3p1d7388jsn5281cea1a33d',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };
      
      console.log ("test")
      return axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    },
    //   console.log(options)
    //   return axios.request(options);
    // },
  
//     getDailyData: (country) => {
//       var options = {
//         method: 'GET',
//         url: 'https://covid-19-data.p.rapidapi.com/report/country/code',
//         params: {date: '2020-12-27', code: 'us'},
//         headers: {
//           'x-rapidapi-key': '22539d0047mshaba23ae76c1a0c3p1d7388jsn5281cea1a33d',
//           'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
//         }
//       };

//       return axios.request(options).then(function (response) {
//         console.log(JSON.stringify(response.data, 0,2));
//     }).catch(function (error) {
//         console.error(error);
//     });
//   }
// }

getNewsUpdate: (country) => {
  var options = {
    method: 'GET',
    url: 'https://coronavirus-smartable.p.rapidapi.com/news/v1/US/',
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
}

}


//  getNewsUpdate: (country) => {
// var url = 'http://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=96c41822c5bd447d90a6023f747bf769';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
    // })
    // //   return axios.request(options);
//     },
// };
  
//     getDeaths: (country) => {
//       const options = {
//         method: "GET",
//         url: "https://covid-193.p.rapidapi.com/statistics",
//         params: { country: country },
//         headers: {
//           "x-rapidapi-key": "ba8be4669fmshee0e414c4ce2a90p1a3daajsn012f6ec8285e",
//           "x-rapidapi-host": "covid-193.p.rapidapi.com",
//         },
//       };
  
//       return axios.request(options);
//     },
//   };
  return getUpdate()
  module.exports = Covid19Update;
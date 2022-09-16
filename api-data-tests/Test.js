// Testing teams:
//var request = require('request');
// var options = {
//   'method': 'GET',
//   'url': 'https://v1.formula-1.api-sports.io/teams',
//   'headers': {
//     'x-rapidapi-key': '7f2253b5987063a23d99388bf28b422d',
//     'x-rapidapi-host': 'v1.formula-1.api-sports.io'
//   }
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

//  testing drivers ?league=39&season=2021
var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/teams/1/drivers',
  //qs: {search: 'lewi'},
  headers: {
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
    'x-rapidapi-key': '52aded364ed9998c8634382a76e8406c'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

/*var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/races',
  qs: {competition: '23', season: '2021'},
  headers: {
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
    'x-rapidapi-key': '7f2253b5987063a23d99388bf28b422d'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
*/

/*var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/rankings/teams/1/drivers',
  qs: {season: '2019'},
  headers: {
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
    'x-rapidapi-key': '52aded364ed9998c8634382a76e8406c'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});*/
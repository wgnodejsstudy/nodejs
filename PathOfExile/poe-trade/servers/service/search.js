const request = require('sync-request');
const query = require('../query.js');

const baseUrl = 'https://www.pathofexile.com';

/* GET Methods */
const apiTradeFetchUri = '/api/trade/fetch/';

/* POST Methods */
const apiTradeSearchUri = '/api/trade/search/';

function getMinimumPrice(league, name) {
  const apiTradeSearchRequestUri = baseUrl + apiTradeSearchUri + league;
  const requestBody = query.generateQuery(name);

  const apiTradeSearchResponseBody = JSON.parse(request('POST', apiTradeSearchRequestUri, { 
    json : requestBody }).getBody('utf-8'));
  
  const resultId = apiTradeSearchResponseBody.id;
  var result = [];
  for (var idx in apiTradeSearchResponseBody.result) {
    var apiTradeFetchRequestUri = baseUrl + apiTradeFetchUri + apiTradeSearchResponseBody.result[idx] + '?query=' + resultId;
    var apiTradeFetchResponseBody = JSON.parse(request('GET', apiTradeFetchRequestUri).getBody('utf-8'));
    if (apiTradeFetchResponseBody.result.length > 0) {
      result = apiTradeFetchResponseBody.result[0];
      break;
    }
  }

  const priceAmount = result.listing.price.amount;
  const priceCurrency = result.listing.price.currency;

  return {amout: priceAmount, currency: priceCurrency};
}

module.exports.getMinimumPrice = getMinimumPrice;
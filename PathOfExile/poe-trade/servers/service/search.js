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
  const firstItem = apiTradeSearchResponseBody.result[0];
  const apiTradeFetchRequestUri = baseUrl + apiTradeFetchUri + firstItem + '?query=' + resultId;
  
  const apiTradeFetchResponseBody = JSON.parse(request('GET', apiTradeFetchRequestUri).getBody('utf-8'));
  const priceAmount = apiTradeFetchResponseBody.result[0].listing.price.amount;
  const priceCurrency = apiTradeFetchResponseBody.result[0].listing.price.currency;

  return {amout: priceAmount, currency: priceCurrency};
}

module.exports.getMinimumPrice = getMinimumPrice;
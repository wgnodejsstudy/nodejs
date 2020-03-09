const express = require('express');
const request = require('sync-request');
const router = express.Router();
const query = require('../query.js');

const baseUrl = 'https://www.pathofexile.com';

/* GET Methods */
const apiTradeFetchUri = '/api/trade/fetch/';

/* POST Methods */
const apiTradeSearchUri = '/api/trade/search/';


router.get('/', (req, res) => res.json({ username : 'Path of Exile' }));

router.post('/search/:league', (req, res) => {
  const league = req.params.league;
  const apiTradeSearchRequestUri = baseUrl + apiTradeSearchUri + league;
  const requestBody = query.generateQuery('Fragment of the Phoenix'); // 불사조의 지도 조각

  const apiTradeSearchResponseBody = JSON.parse(request('POST', apiTradeSearchRequestUri, { 
    json : requestBody }).getBody('utf-8'));
  
  const resultId = apiTradeSearchResponseBody.id;
  const firstItem = apiTradeSearchResponseBody.result[0];
  const apiTradeFetchRequestUri = baseUrl + apiTradeFetchUri + firstItem + '?query=' + resultId;
  
  const apiTradeFetchResponseBody = JSON.parse(request('GET', apiTradeFetchRequestUri).getBody('utf-8'));
  const priceAmount = apiTradeFetchResponseBody.result[0].listing.price.amount;
  const priceCurrency = apiTradeFetchResponseBody.result[0].listing.price.currency;
  console.log(priceAmount + ' ' + priceCurrency);

  res.send(apiTradeFetchResponseBody);
});

module.exports = router;
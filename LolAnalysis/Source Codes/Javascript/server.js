// express, request 모듈을 추출한다.
var express = require('express');
var request = require('request');

// 웹 서버를 생성한다.
var app = express();
app.use(express.static('public'));

var apiKey = 'RGAPI-f93194b1-9964-4ca6-a9f5-f2f3e2d79059';
var apiURL = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/';

// 라우트한다.
app.get('/summoner/:summonerName', function (request, response) {
    var summonerName = request.params.summonerName;
    var requestURL = apiURL + encodeURI(summonerName) + '?api_key=' + apiKey;
    console.log(requestURL)

    var summonerInfo = '';

    // Riot Server에 요청한다.
    request.get({
        url: requestURL
    }, function(error, response, body) {
        summonerInfo = JSON.parse(body);
    })

    response.send(summonerInfo);
});


// 웹 서버를 실행한다.
app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});
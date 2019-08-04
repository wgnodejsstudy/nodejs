// express, request 모듈을 추출한다.
var express = require('express');
var request = require('request');

// 웹 서버를 생성한다.
var app = express();
app.use(express.static('../HTML'));

var apiKey = 'RGAPI-792c09a4-15d6-44d0-a7a1-2803c4c0c777';
var apiURL = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/';

// 라우트한다.
app.get('/summoner', function (req, res) {
    var summonerName = req.param('summonerName');
    var requestURL = apiURL + encodeURI(summonerName) + '?api_key=' + apiKey;

    console.log('Request URL : ' + requestURL);

    // Riot 서버에 요청.
    request.get({
        url: requestURL
    }, function(error, response, body) {
        console.log("Response :", JSON.parse(body));
        res.send(JSON.parse(body));
    });
});


// 웹 서버를 실행한다.
app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});
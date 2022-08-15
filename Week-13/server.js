const request = require('request');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
// var city = 'Las Vegas';
var apiKey = '004c270610a5845b7755518f9428120a';

app.get('/getByCity/', function (req,res){
    //Network call --> http://localhost:8000/getByCity/?city=Chennai
    let city = req.query.city;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    request( url, function(error, response, body){
        weather_json = JSON.parse(body);
        const temperature = weather_json.main.temp;
        res.send(`Temperature in ${city} is ${temperature}`);
    })
})

app.listen(8000);
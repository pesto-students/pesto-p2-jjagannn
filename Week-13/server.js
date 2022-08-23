const request = require('request');
var express = require('express');

var app = express();
let PORT = 3000;
app.use( express.json() )
app.set('view engine', 'ejs');
var apiKey = '004c270610a5845b7755518f9428120a';

app.get('/getByCity/:city', function (req,res){
    //Network call --> http://localhost:8000/getByCity/?city=Chennai
    // let city = req.query.city;
    let {city} = req.params;
    // if (!city){
    //     res.status(418).send({message: 'We need a city!'})
    // }
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    request( url, function(error, response, body){
        // weather_json = JSON.parse(body);
        weather_json = body;
        console.log(weather_json.main)
        let temperature = weather_json.main.temp;
        res.status(200).send(`Temperature in ${city} is ${temperature}`);
    })
})

// Api which returns weather data of multiple cities
app.get('/getByCities/', function  (req,res){
    let cities = ['London', 'Chennai', 'Sydney', 'Hyderabad', 'Mumbai', 'Beijing', 'Bangkok', 'Paris', 'Dubai', 'Singapore', 'Kuala Lumpur', 'Tokyo', 'Istanbul', 'New York', 'Seoul', 'Barcelona', 'Madrid','Rome', 'Doha', 'Chicago', 'Abu Dhabi', 'Amsterdam', 'San Francisco', 'Toronto', 'Berlin', 'Las Vegas', 'Vienna'];
    let promises = [];
    cities.forEach(city => {
        let eachCityWeather = new Promise(function (res, rej) {
            let options = {
                method: 'GET',
                url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            };
            request(options, function (error, response, body) {
                if (error) {
                    rej(error);
                } else {
                    res(body);
                }
            });
        })
        promises.push(eachCityWeather)
    });
    
    Promise.all(promises)
        .then((results) => {
            // res.status(200).send((results))
            // Sample network call --> http://localhost:3000/getByCities/?p=2
            const pageCount = Math.ceil(results.length / 10);
            let page = parseInt(req.query.p);
            if (!page) { page = 1;}
            if (page > pageCount) {
              page = pageCount
            }
            res.json({
              "page": page,
              "pageCount": pageCount,
              "citiesWeatherInfo": results.slice(page * 10 - 10, page * 10)
            });
        }).catch(err => console.log(err))
})

app.get('/dailyForecast/:city/:days', function (req,res) {
    let { city, days } = req.params;
    // Sample network call ---->  api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=1&appid=004c270610a5845b7755518f9428120a
    var url = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${days}&appid=${apiKey}`;
    request( url, function(error, response, body){
        weather_json = body;
        console.log(weather_json)
        // console.log(weather_json.main)
        let temperature = weather_json.main.temp;
        res.status(200).send(`Temperature in ${city} is ${temperature}`);
    })
})



app.listen(PORT, () => console.log(`It's alive on http:localhost:8080 : ${PORT}`));
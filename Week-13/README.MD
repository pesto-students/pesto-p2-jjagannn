Assignment 1 - Weather app

1. Create a backend service in NodeJs.
2. Design the architecture of your service.
3. Understand what all Design Patterns you are going to use in this service.
4. Review above 2 points by your mentor.

To-do:
1. Segregate files using separate folders(Database/"model", "Controller"(), "Routes", +1 folder for "utils"-func that handles decryption, authentication is put in a middleware, +1 for "middlewares").
2. Design patterns:
User signup with addn params --> 
func that does calc can be segregated into (Modularity)-> 1 func for cleaning, 1 func for adding the data, 1 func for business logic. Keep functions simple. Use 1 function for 1 purpose/operation. (Name of design pattern?)
Keep routing logic separate.
Define middlewares globally.

Composite, decorator, adaptive design pattern.

Start Creating following APIs:
 Data of Multiple cities.
1. Api which returns weather data of multiple cities. --> take an array of cities and call multiple, present.
2. Api also filters the result by city name or city code. --> take data of 25 cities, pincodes and save in DB.
3. Api should return the data in pagination. -->skip and size. eg. skip 0 and size 5. eg2. skip 5 and size 5--> 0,5,10,15,20,25.
4. Detailed Forecast for the next X days. -->
5. X days should be decided by the user. -->

Points to remember:-
Data should be very detailed.
Filter the data by any particular city, any particular date , any particular moment.
Current weather conditions of any particular city.

For Weather free api , please visit any of below free services--> 
1.
https://openweathermap.org/api
Api Docs -https://openweathermap.org/api
How to use -https://openweathermap.org/appid
2.
https://www.weatherapi.com/
Api Docs -https://www.weatherapi.com/docs/
How to use -https://www.weatherapi.com/docs/


Guidelines:
Before creating an api's review architect of your service and design pattern by your Mentor.
Push all your code in a separate Github repo.
Don't push all your code in a single go.
Don't push your code in the master branch. 
Create a separate branch for yourcode.
Push your code every part wise.
Get reviewed all your code by your mentor.
After review, get your code merged by your mentor.
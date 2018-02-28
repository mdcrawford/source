// we'll be using the "axios" package to make our API call
let axios = require("axios");

// define a function which makes a call to the GoogleMaps API
function getMapsData() {
  // note the .then() and .catch() bits of this code.  this is the result of something called
  // "asyncronous" functions, a topic we'll cover more next week
  axios
    .get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0293,-78.4767&radius=500&type=restaurant&key=AIzaSyBY4xqlvGUeBVTT4SqkbZZV1IJUB8v8gnk"
    )
    .then(response => {
      // here, we pass in a function with one parameter, response,
      // which represents the HTTP response we received from our GET request
      googleData = response.data.results;

      // using .map() over the array of results to print out a little message about each result
      googleData.map(datum => {
        console.log(datum.name + " has a rating of " + datum.rating);
      });
    })
    .catch(error => {
      // if something goes wrong with the GET request, we'll log the error instead
      console.log(error);
    });
}

// finally, we call the above function
getMapsData();
console.log("I happened!!"); // this will probably print first, despite the fact that we called it second

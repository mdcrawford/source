let axios = require("axios");

function getMapsData() {
  axios
    .get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0293,-78.4767&radius=500&type=restaurant&key=AIzaSyBY4xqlvGUeBVTT4SqkbZZV1IJUB8v8gnk"
    )
    .then(response => {
      googleData = response.data.results;
      googleData.map(datum => {
        console.log(datum.name + " has a rating of " + datum.rating);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

getMapsData();

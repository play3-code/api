// apis

let apidata;
let earthquakes;

let currentYear;

let bounds = {
  left: 8.20782,
  top: 47.094669,
  right: 8.365691,
  bottom: 47.024504,
};

function preload() {
  // apiData = loadJSON(
  //   "https://api.logair.unige.ch/v1/service/device/latest?device_id=LACF-004&latest=8000"
  // );
  // let url =
  //   "https://earthquake.usgs.gov/earthquakes/feed/v1.0/" +
  //   "summary/all_day.geojson";
  // earthquakes = loadJSON(url);
}

function setup() {
  createCanvas(900, 650);

  // let url =
  //   "https://earthquake.usgs.gov/earthquakes/feed/v1.0/" +
  //   "summary/all_day.geojson";

  let url =
    "https://api.logair.unige.ch/v1/service/device/latest?device_id=LACF-004&latest=1";

  // d3.json(url)
  //   .then((json) => {
  //     console.log("json", json);
  //   })
  //   .catch((error) => {
  //     console.error("Error loading the data");
  //   });

  // loadJSON(
  //   url,
  //   function (json) {
  //     console.log("json", json);
  //   },
  //   function (error) {
  //     console.log("error", JSON.stringify(error));
  //   }
  // );

  var headers = {
    "Access-Control-Allow-Origin": "*",
  };

  fetch(url, {
    method: "GET",
    mode: "cors",
    headers: headers,
  })
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });

  noLoop();
}

function draw() {}

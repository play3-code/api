// apis
let apidata;

function preload() {
  apidata = loadJSON(
    "http://localhost:3000/v1/service/device/latest?device_id=LACF-004&latest=3"
  );
}

function setup() {
  createCanvas(900, 650);

  console.log("apidata", apidata);

  noLoop();
}

function draw() {
  background(250);
}

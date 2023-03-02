function convert() {
  // Get the user input
  var temperature = document.getElementById("temperature").value;
  var from = document.getElementById("from").value;
  console.log(temperature);

  // Convert temperature to Kelvin
  if (from == "fahrenheit") {
    var kelvin = (temperature - 32) * (5 / 9) + 273.15;
  } else if (from == "celsius") {
    var kelvin = temperature / 1 + 273.15;
  } else {
    var kelvin = temperature;
  }

  // Convert Kelvin to output temperature

  var ansFar = (kelvin * 9) / 5 - 459.67;
  ansFar = ansFar.toFixed(2) + "°F";

  var ansCel = kelvin - 273.15;
  ansCel = ansCel.toFixed(2) + "°C";

  var ansKel = kelvin;
  ansKel = ansKel + "K";

  console.log(ansCel);
  console.log(ansFar);
  console.log(ansKel);

  // Display the result
  document.getElementById("ansF").value = ansFar;
  document.getElementById("ansK").value = ansKel;
  document.getElementById("ansC").value = ansCel;
}

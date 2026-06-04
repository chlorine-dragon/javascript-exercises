const convertToCelsius = function(t) {
  let cel = Math.round(((t - 32) * 5/9)*10)/10;
  return cel;
};

const convertToFahrenheit = function(t) {
  let far = Math.round((t * 9/5 + 32)*10)/10;
  return far
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

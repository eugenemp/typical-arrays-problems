
exports.min = function min (array) {
  //Check if array is empty or no params specified 
  //and use Math.min() method to find minimal value of array
  return (!array || array.length === 0) ? 0 : Math.min(...array);
}

exports.max = function max (array) {
  //Check if array is empty or no params specified 
  //and use Math.max() method to find maximal value of array
  return (!array || array.length === 0) ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
  //Check if array is empty or no params specified 
  //and use Array.reduce() result devided by array length to find an average value
  return (!array || array.length === 0) ? 0 : 
    array.reduce( (previous, current) => previous + current, 0 ) / array.length;
}

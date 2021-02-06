
exports.min = function min (array) {
  if (!array) return 0; 
  return Math.min(...array, 0);
}

exports.max = function max (array) {
  if (!array) return 0; 
  return Math.max(...array, 0);
}

exports.avg = function avg (array) {
  if (!array) return 0; 
  return array.reduce((acc, el) => acc + el, 0) / (array.length === 0 ? 1 : array.length) ;
}

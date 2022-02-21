
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resArray = [];
  if (!Array.isArray(matrix) || matrix.length == 0){
    return [];
  }
  for (let i = 0; i < matrix.length; i++){
    resArray.push(...(i % 2 === 1) ? matrix[i].reverse() : matrix[i]);
  }
  return resArray;
}

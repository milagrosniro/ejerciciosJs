function diagonalDifference(arr) {
    // Write your code here
let leftDiagonal = 0;
let rightDiagonal = 0;
  
  for(let i=0; i<arr.length; i++){
    leftDiagonal = arr[i][i] + leftDiagonal;
    rightDiagonal = rightDiagonal + arr[arr.length-1-i][i]
  }
  return Math.abs(leftDiagonal-rightDiagonal)
}
diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]])
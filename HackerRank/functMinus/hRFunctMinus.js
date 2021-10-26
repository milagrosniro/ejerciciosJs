'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
   let counts = [0,0,0];
  arr.forEach(num =>{
    if(num>0) counts[0] +=1;
    if(num<0) counts[1] +=1;
    if(num===0) counts[2] +=1;
  })
  
  counts.forEach(num=>console.log((num/arr.length).toFixed(6)))
  
// let positive = [];
// let negative = [];
// let zero= [];
// let lengthArr= arr.length
// console.log(lengthArr)

// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         negative.push(arr[i])
//     }
//     if(arr[i]>0){
//         positive.push(arr[i])
//     }
//     if(arr[i]=== 0){
//         zero.push(arr[i])
//     }
// }
// let ratioPositive= (positive.length/lengthArr).toFixed(6);
  
// let ratioNegative= (negative.length/lengthArr).toFixed(6);
 
// let ratioZero= (zero.length/lengthArr).toFixed(6);
  

// return console.log(ratioPositive + '\n' + ratioNegative + '\n' + ratioZero)
 }


//  function plusMinus(arr) {
//     // Write your code here
//     var negativos=0;
//     var positivos=0;
//     var cero=0;
//     for(var i= 0; i<arr.length;i++){
//         if(arr[i]<0){
//           negativos++;  
//         }
//         else if(arr[i]>0){
//             positivos++;
//         }else{
//             cero++;
//         }
//     }
//     var arrlength=arr.length
//     var neg=(negativos/arr.length).toFixed(6);
//     var pos=(positivos/arr.length).toFixed(6);
//     var cer=(cero/arr.length).toFixed(6);
    
//     console.log(`${pos}
//     ${neg}
//     ${cer}`)

// }

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

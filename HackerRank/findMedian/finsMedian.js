function findMedian(arr) {
    // Write your code here
    let sortArr = arr.sort(function(a,b){return a-b})
     console.log(sortArr)
  let half = Math.floor(sortArr.length/2)

  return sortArr[half]
    
}
// findMedian([0,1,2,4,6,5,3])


//resolucion para array connum par tmb
const arr = [4, 6, 2, 45, 2, 78, 5, 89, 34, 10];
const findMedian = (arr = []) => {
   const sorted = arr.sort((a, b) => {
      return a - b;
   });
  console.log(sorted)
   if(sorted.length % 2 === 0){
      const first = sorted[sorted.length / 2 - 1];
     console.log(first)
      const second = sorted[sorted.length / 2];
     console.log(second)
      return (first + second) / 2;
   }
   else{
      const mid = Math.floor(sorted.length / 2);
      return sorted[mid];
   };
};
console.log(findMedian(arr));
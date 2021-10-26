function miniMaxSum(arr) {
    // Write your code here
    let minSum= 0;
    let maxSum =0;
    let sortArr = arr.sort(function(a,b){return (a-b)});
    
    for(let i=1; i<sortArr.length; i++){
        maxSum= maxSum + sortArr[i]
    }

    for(let i=0; i<sortArr.length-1; i++){
        minSum= minSum + sortArr[i]
    }
    return console.log(minSum , maxSum)
}

miniMaxSum([1,2,3,4,5])//10  14

//
function miniMaxSum(arr) {
    // Write your code here
    
    var arrorder=arr.sort(function(a,b){
        return a-b
    })
    
    var arr1=arrorder.slice(0,4);
    var arr2=arrorder.slice((arrorder.length-4),arrorder.length);
    
    var suma1=0;
    var suma2=0;
    var min=arr1.forEach(e=>suma1=suma1+e);
    var max=arr2.forEach(e=>suma2=suma2+e);
    
    console.log(suma1 + " " + suma2);
}
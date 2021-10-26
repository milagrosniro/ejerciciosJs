function lonelyinteger(a) {
    // Write your code here
    let aSort= a.sort(function(a,b){return a-b})
    console.log(aSort)
    for(let i=0; i<aSort.length; i++){
            //   console.log(aSort[i])
        if(i === 0){
            if(aSort[i] !== aSort[i+1]){
                return aSort[i]
            }
        }
        
         if(aSort[i] !== aSort[i+1] && aSort[i] !== aSort[i-1] ){
                return aSort[i]
            }
        
    }
return "there is not unique element"
}

lonelyinteger([0,0,1,2,1])//2

function lonelyinteger(a) {
    // Write your code here
    for(var i=0; i<a.length; i++){
        let nuevoArr = a.slice(i,a.length-1)
        nuevoArr.indexOf(a[i])
    }
               
}
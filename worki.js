
/**Retornar cuantos parentesis faltan para que esten todos correctamente cerrados */

function getMin(s) {
    // Write your code here
    let open= [];
    console.log(open)
    let close= [];
  for(let i=0; i<s.length; i++){
    if(s[i]==='('){
      open.push(s[i])
    }
    if(s[i]===')'){
      close.push(s[i])
    }
  }
  console.log("open ", open)
  if(open.length === close.length) return 0;
  if(open.length > close.length) return open.length - close.length;
  return close.length - open.length;
//  let number = s.length/2
//  console.log(number)
  
//   let right = s.slice(0,number)
//   let left = s.slice(number, s.length)
//   console.log(left)
//   console.log(right)
//   if(right === left) return 0
  
//   let lengthR = right.length;
//   console.log(lengthR);
  
//   let lengthL = left.length;
//   console.log(lengthL)
  
//   if(lengthR > lengthL ){
//     return lengthR - lengthL
//   }else{
//     return lengthL - lengthR
//   }

}

getMin('()))') //2
getMin('()()')

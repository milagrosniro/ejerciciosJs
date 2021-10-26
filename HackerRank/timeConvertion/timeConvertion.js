function timeConversion(s) {
    // Write your code here
let hour = parseFloat(s.slice(0,2)); //07
let amPm = s.slice(8) //
//console.log(amPm)
let seconds = s.slice(2,8);
// console.log(hour + 12)
 //  console.log(s)
  
  if(amPm === 'AM'){
    if(hour === 12) return '00' + seconds
    return s.slice(0,8)
  }
  if(hour === 12) return s.slice(0,8)
  return (hour + 12)+ seconds
}

// timeConversion('07:05:45PM')
//timeConversion('12:40:22AM')
timeConversion('06:40:03AM')//'06:40:03'
timeConversion('12:45:54PM')//'12:45:54'
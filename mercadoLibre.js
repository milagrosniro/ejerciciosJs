// console.log('4la'.charAt(0))
// console.log('hola'.length)
// const hola='hola'
// console.log('4111111111111111'.slice(0,6))
// const num = '4jg'
// const regex = ()=>{
//   if(num.match(/^[0-9 ]+g/))return 'match'
//   return 'No'
// }
// console.log('4111111111111111'.length)


// function makeItBark(name) {
//     function Dog (name) {
//         this.name = name;
//     }

//     Dog.prototype.bark = function () {
//         return this.name + ' says woof hey';
//     };

//     let scooby = new Dog(name);
//   console.log(scooby)
//     return scooby.bark();
// }
// makeItBark('perro')
/*
 * Complete the 'CardNumberAnalyzer' class below.
 * Add as little or as many functions or extra code blocks as you see fit.
 */

class CardNumberAnalyzer {
    constructor(cardNumber) {
        // Store the card number here. Validate its format and throw
        // an error if necessary.
     let numTemp = cardNumber
     
     if(!cardNumber.match(/^[0-9 ]+g/)){
       if(cardNumber.charAt(0)==='3' || cardNumber.charAt(0) ==='4' || cardNumber.charAt(0)==='5' ){
         this.cardNumber = cardNumber
       }else{
            throw 'Unknown card brand'
        }
     }else{
       throw 'Not a valid card number'
     }
      
      
    }
  
  saludar(){
    return 'hola'
  }
    getBrand(){
        if(!this.cardNumber.match(/^[0-9 ]+g/)){
          console.log("match")
           if(this.cardNumber.charAt(0) === '3'){
            return 'american_express'
        }else if(this.cardNumber.charAt(0) === '4'){
            return 'visa'
        }else if(this.cardNumber.charAt(0) === '5'){
            return 'master_card'
        }  else{
            return 'Unknown card brand'
        }
        } else{
            return 'Not a valid card number'
        }
        
       
    }
  
      
    hasValidCardNumberLength() {
        // Return true if the card number's length is valid
        // for the card brand that was detected, otherwise false.
        let brand = this.getBrand();
        let numberCard = this.cardNumber.replace(/ /g,'')
        console.log("cardsinespacio", numberCard.length)
      console.log("bramd", brand)
        
        if(brand === 'american_express'){
            if(numberCard.length === 15){
                return true
            }}
          
            else if(brand === 'visa' ||brand === 'master_card' ){
            if(numberCard.length === 16){
                return true
            }
        }
      
        
    
      else{
        return false
    }
    }
   
    
     getLocation(){
        let brand = this.getBrand();
        if(brand === 'american_express'){
            return  'front'   
        }
        
        if(brand === 'visa' ||brand === 'master_card' ){
            return  'back'
               
            
        }
    }
    
    getCodeLength(){
         let brand = this.getBrand();
        if(brand === 'american_express'){
            return 4   
        }
        
        if(brand === 'visa' ||brand === 'master_card' ){
            return 3
               
            
        }
    }
    getExpectedLength(){
           let brand = this.getBrand();
        
        if(brand === 'american_express'){
            
                return 15
            }
            if(brand === 'visa' ||brand === 'master_card' ){
                return 16
            }
        return null
        }
      
    getCardDetails() {
        return {
            card: {
                number: this.cardNumber,
                bin: this.cardNumber.replace(/ /g,'').slice(0,6),
                brand: this.getBrand(),
                expectedLength: this.getExpectedLength(),
                isValid: this.hasValidCardNumberLength()
                
                // Complete this object.
                
            },
            securityCode: {
                // Complete this object.
                location: this.getLocation(),
                expectedLength: this.getCodeLength()
                
            }
        }
    }
  
}
// const creditCard = new CardNumberAnalyzer('4111 1111 1111 1111');

// creditCard.cardNumber
// creditCard.hasValidCardNumberLength();
// //const cardDetails = creditCard.getCardDetails();
// console.log(cardDetails)

// console.log(creditCard)

// //isValid will be true, because the number has 16 digits
// const isValid = creditCard.hasValidNumberLength(); 

// const cardDetails = creditCard.getCardDetails();
// const holaa =creditCard.hasValidCardNumberLength();
// console.log(holaa)

const badCreditCard = new CardNumberAnalyzer('8000 0000 0000');
 console.log(badCreditCard)
// badCreditCard.getBrand()

/*
cardDetails will contain:

{
  card: {
    number: '4111111111111111',
    bin: '411111',
    brand: 'visa',
    expectedLength: 16,
    isValid: true,
  },
  securityCode: {
    location: 'back',
    expectedLength: 3
  }
}
*/


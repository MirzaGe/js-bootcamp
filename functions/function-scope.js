//Global scope 

let convertFarenheitToCelcius = function(fahrenheit) {
    let celsius = (fahrenheit - 32)* 5/9
    return celsius
    }
    
    let tempOne = convertFarenheitToCelcius(32)
    let tempTwo = convertFarenheitToCelcius(69)
    
    console.log(tempOne)
    console.log(tempTwo)
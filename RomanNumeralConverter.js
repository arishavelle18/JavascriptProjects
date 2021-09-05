function convertToRoman(num) {   // recursion
    let romanNumeral={ // declare a decending value of roman numeral
        'M':1000,
        'CM':900,
        'D':500,
        'CD':400,
        'C':100,
        'XC':90,
        'L':50,
        'XL':40,
        'X':10,
        'IX':9,
        'V':5,
        'IV':4, 
        'I':1                                  
    }
    if(num===0){        // return ""
        return "";
    }
    else{
        for(let prop in romanNumeral){ // loop the num
            if(num>=romanNumeral[prop]){    // if num is greater than roman numeral meaning it can duplicate the same letter in roman numeral
                return prop + convertToRoman(num -romanNumeral[prop]); //concatenate each roman numeral
            }
        }
    }
}
console.log(convertToRoman(36));

function rot13(str) {
    let letterA = 'A'.charCodeAt();     // convert A into ascii value
    let newArr=str.split("");           // split the str
    return newArr.map(element => {      // map all the element of the newArr
        if(/[A-Z]/.test(element)){      // use regex and test if the element  is compose of Uppercase characters
             return /[A-Z]/.test(String.fromCharCode(element.charCodeAt()+13))   // check if the element in ascii value is in range of alphabetic value if you plus 13 
                      ?String.fromCharCode(element.charCodeAt()+13)             // if true then it return ascii value +13 and then change it to character using String.fromCharCode
                      :String.fromCharCode((element.charCodeAt()%13)+letterA);  // if false take the modulo of 13 and add to letterA which is 65
        }
            return element;  //return non-uppercase letter
    }).join("");        // change to string 
  }
  console.log(rot13("SERR PBQR PNZC"));

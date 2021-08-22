function rot13(str) {
    let letterA = 'A'.charCodeAt();
    let newArr=str.split("");
    return newArr.map(element => {
        if(/[A-Z]/.test(element)){
             return /[A-Z]/.test(String.fromCharCode(element.charCodeAt()+13))
                      ?String.fromCharCode(element.charCodeAt()+13) 
                      :String.fromCharCode((element.charCodeAt()%13)+letterA);
        }
            return element;  
    }).join("");
  }
  console.log(rot13("SERR PBQR PNZC"));

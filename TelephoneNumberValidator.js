function telephoneCheck(str) {
  if(/^-/.test(str)){ // check if the telephone number has '-' in the first element
    return false;
  }
  if(str.split(/[\s\-]/g).length>4){  // check if you split the str in space and - and convert to array then if the length is greater than 4
    return false;
  }
  let newArray=str.replace(/-| /g,"");

  if(/^1?\(\d{3}\)/.test(newArray)){    // check if it has 1 or have not and it has 3 digit 
    if(newArray.replace(/[()]/g,"").length === 11 && parseInt(newArray[0])===1 || newArray.replace(/[()]/g,"").length === 10) // check if the new array has "()" then remove it 
      return true;                                  // check the length if it is equal to 11 and it must me element[0] is equal to 1 or if it has no 1 then the length must be 10
      else{
        return false;
      }
  }
  if(newArray.length===10){ // if the length is equal to 10 no more "()"
    return true;
  }
  else if(newArray.length===11 && parseInt(newArray[0])===1){ // if the array has lenght of 11 and it has 1 in element[0] and it has no ()
    return true;
  }
  return false; // if the conditional statement above does not meet it will consider as not a telephone number
}

console.log(telephoneCheck("1(555)555-5555"));

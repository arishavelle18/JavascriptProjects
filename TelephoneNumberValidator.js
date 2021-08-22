function telephoneCheck(str) {
  if(/^-/.test(str)){
    return false;
  }
  if(str.split(/[\s\-]/g).length>4){
    return false;
  }
  let newArray=str.replace(/-| /g,"");

  if(/^1?\(\d{3}\)/.test(newArray)){
    if(newArray.replace(/[()]/g,"").length === 11 && parseInt(newArray[0])===1 || newArray.replace(/[()]/g,"").length === 10)
      return true;
      else{
        return false;
      }
  }
  if(newArray.length===10){
    return true;
  }
  else if(newArray.length===11 && parseInt(newArray[0])===1){
    return true;
  }

  return false;
}

console.log(telephoneCheck("1(555)555-5555"));

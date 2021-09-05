function palindrome(str) {
    function checkstring(str){ // check if the str must only have number and letter
        return str.filter(item=>/[a-z0-9]/i.test(item));
    }
    
    let newArray = str.split("").reverse();  // str must be split and reverse
    return checkstring(newArray).join("").toUpperCase() === checkstring(str.split("")).join("").toUpperCase();  // this will check if you reverse the str then compare to original
}
  
console.log(palindrome("eyes_"));

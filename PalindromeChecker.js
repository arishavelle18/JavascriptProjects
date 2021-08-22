function palindrome(str) {
    function checkstring(str){
        return str.filter(item=>/[a-z0-9]/i.test(item));
    }
    
    let newArray = str.split("").reverse();
    return checkstring(newArray).join("").toUpperCase() === checkstring(str.split("")).join("").toUpperCase();
}
  
console.log(palindrome("eyes_"));

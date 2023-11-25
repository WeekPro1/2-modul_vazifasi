function palindrome(str) {
    
    let pl = "";
    for (let i = str.length - 1; i >= 0 ; i--) {
       pl += str[i]
    }  
    if(pl==str){ 
        return true
    } else{ 
        return false; 
    } 
}

console.log(palindrome("121"))

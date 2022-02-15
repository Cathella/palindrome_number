/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
  var revertedNumber = 0;
  
  while(x > revertedNumber){
      revertedNumber = revertedNumber * 10 + x % 10;
        x = x / 10;
  }
  
  return x == revertedNumber || x == revertedNumber / 10;
};



function brokenKeys(rightPhrase, typedPhrase) {
    var brokenKeys = [];
  
    for (var i = 0; i < rightPhrase.length; i++) {
      var rightChar = rightPhrase.charAt(i);
      var typedChar = typedPhrase.charAt(i);
  
      if (rightChar !== typedChar && brokenKeys.indexOf(rightChar) === -1) {
        brokenKeys.push(rightChar);
      }
    }
  
    return brokenKeys;
  }
  
  console.log(brokenKeys("Subax wanagsan", "Subah wanagsan")); 
 
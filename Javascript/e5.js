function stringVowel(input){
  var count = 0;

  var lowC = input.toLowerCase();

  for (var i = 0; i < lowC.length; i++){
      if(lowC[i] !== 1){
        if (lowC[i] == "a" || lowC[i] == "e" || lowC[i] == "i"|| lowC[i] == "o"|| lowC[i] == "u"){
          count++;
        }
      }
  }
  return count;
}

console.log(stringVowel("aeee"));

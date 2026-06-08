const palindromes = function (word) {
  // word = word.replacereplace(/[^\w\s\']|_/g, "")
  //        .replace(/\s+/g, " ");
  let arr = word.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
  for(let i=1; i <= Math.trunc(arr.length/2); i++){
    if(arr[i] == arr.at(-i-1)){
    }else{
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

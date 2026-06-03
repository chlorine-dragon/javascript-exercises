const repeatString = function(word, num) {

    let string = "";
    // let phrase = "";
    if(num >= 0){
      for(i=0;i<num;i++){
      string = string + word;
      }
    }else{
      return "ERROR";
    }
    // console.log(phrase);
    return string

};

// Do not edit below this line
module.exports = repeatString;

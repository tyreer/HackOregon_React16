exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    //Doesn't quite work
    let returnArray = Array.from(str);

    for(let i = 0; i < returnArray.length; i++){
      if (returnArray[i] === returnArray[i + amount-1]){
        returnArray.splice(i, 1);
      }
    }
    let returnString = returnArray.join('');
    return returnString;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    let returnArray = Array.from(str);
    returnArray.reverse();
    let returnString = returnArray.join('');
    return returnString;
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    const countAnswers = arr.reduce((prev, curr) => prev + curr);
    return countAnswers;

    //***********
    // At first, I did it like this below.
    //***********

    // const countAnswers = arr.reduce(function(prev, curr){
    //   return prev + curr;
    // });
    // return countAnswers;
  },

  remove: function(arr, item) {
    const cleanArray = arr.filter(remove => remove !== item);
    return cleanArray;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === item) {
         arr.splice(i, 1);
         i = 0;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    const returnConcat = arr1.concat(arr2);
    return returnConcat;
  },

  insert: function(arr, item, index) {
    const returnSplice = arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === item) counter++;
    }
    return counter;
  },

  duplicates: function(arr) {
    //Could refactor using .includes()
    //which I just was told exists
    //Also: http://stackoverflow.com/a/24968449

    let returnArray = [];
    let sortArray = arr.sort();

    for (let i = 0; i < arr.length; i++){
        if (sortArray[i] === sortArray[i+1]) {
          returnArray.push(arr[i])
        }
      }

    for (let i = 0; i < returnArray.length; i++){
        if (returnArray[i] === returnArray[i+1]) {
          const returnSplice = returnArray.splice(i, 1);
        }
      }
    return returnArray;
  },

  square: function(arr) {
    const returnSquaredArray = arr.map(item => item*item);
    return returnSquaredArray;
  },

  findAllOccurrences: function(arr, target) {
    //Could also refactor to use indexof
    const returnTargetArray = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === target) returnTargetArray.push(i);
    }
    return returnTargetArray;
  }
};

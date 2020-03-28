var sortArray = [3,1,4,1,5,9,2,6,5,3,5,8,9,7,9];
var sort = function (sortArray) {
  var sortedArray = [];
  for(var i = 0; i < sortedArray.length; i++) {
    sortArray[i] = 0;
  }
  for(var i = 0; i < sortArray.length; i++) {
    for(var j = i; j < sortArray.length; j++) {
      var x = sortArray[i];
      var y = sortArray[j+1];
      var z = 0;
      if(x < y) {
        z = z+1;
      }
      sortedArray[z] = x;
    }
  }
  return sortedArray;
} 

var bubbleSort = [1,55,43,77,35,99]; //paste data here

var sorter = function (sortArray) { //sorting function

for(var sorted = 0; sorted < sortArray.length; sorted++) {

for(var sorted1 = 0; sorted1 < sortArray.length;sorted1++) {
    
if(sortArray[sorted1] > sortArray[sorted1+1]) {
    var temp = sortArray[sorted1+1];
    sortArray[sorted1+1] = sortArray[sorted1];
    sortArray[sorted1]=temp;
}
} 
}
return sortArray;
};
sorter(bubbleSort);

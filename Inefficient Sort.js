var bubbleSort = [0,0,0,0,1]; //Insert Numbers Here. Maximum of 5 numbers.
var sortArrayer = true;

var sorter = function (sortArray) { //function
while(sortArrayer === false) {
if(sortArray[0] > sortArray[1]) {
    sortArray[0] = sortArray[1];
}
if(sortArray[1] > sortArray[2]) {
   sortArray[1] = sortArray[2]; 
}
if(sortArray[2] > sortArray[3]) {
    sortArray[2] = sortArray[3];
}
if(sortArray[3] > sortArray[4]) {
    sortArray[3] = sortArray[4];
}
if(sortArray[4] > sortArray[5]) {
    sortArray[4] = sortArray[5];
}
}

if(sortArray.sort() !== sortArray) {
    sortArrayer = false;
}
else {
    return sortArray;
}
};
sorter(bubbleSort);

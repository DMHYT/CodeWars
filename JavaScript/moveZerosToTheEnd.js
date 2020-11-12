/*
Write an algorithm that takes an array 
and moves all of the zeros to the end, 
preserving the order of the other elements.
*/

var moveZeros = function (arr) {
  //creating new array without zeros
  let newArr = arr.filter(element => element !== 0);
  //pushing zero to newArr every time when zero is found in arr
  arr.forEach(function(item){
    if(item === 0) newArr.push(0)
  });
  return newArr;
}

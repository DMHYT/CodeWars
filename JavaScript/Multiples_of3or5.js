/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)
*/

function solution(number){
  //variable that will be returned and var that will be increasing
  let sum = 0, num = 1;
  //while num less than number
  while(number - 1 > num){
    //increase num
    ++num;
    //if num is a multiple of 3 or 5
    if(num % 3 === 0 || num % 5 === 0){
      //add num to sum
      sum += num;
    }
  }
  return sum;
}

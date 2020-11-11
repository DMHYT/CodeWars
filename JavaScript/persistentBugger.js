/*
Write a function, persistence, that takes in a positive parameter num 
and returns its multiplicative persistence, which is the number of times 
you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
  //if num is one-digit return 0
  if(num < 10) return 0; else {
    //variable representing number of operations
    let j=0;
    //while num is not one-digit
    while(num >= 10){
      //create an array of digits
      let s = num.toString().split("");
      //set num to 1
      num = 1;
      //and multiply it by all digits
      s.forEach(element => num *= Number(element));
      //increase j after completed operation
      ++j;
    }
    return j;
  }
}

//the best solution on the site (omg what's this???)
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}

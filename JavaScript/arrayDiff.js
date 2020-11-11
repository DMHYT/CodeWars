/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
If a value is present in b, all of its occurrences must be removed from the other.
*/

function arrayDiff(a, b) {
  //loop above 'b' array
  for(let i in b){
    //infinite loop that can be stopped if element won't be found in 'a' array
    while(true){
      let e = a.indexOf(b[i], 0);
      //if not found, break the loop, else remove element by index
      if(e === -1) break; else a.splice(e, 1);
    }
  }
  return a;
}

"use strict";

{
  const scores = [80, 90, 40, 70,];
  
  const [a, b, ...others] = scores;
  console.log(a);
  console.log(b);
  console.log(others);
}


// const otherScore = [12, 14]
// const scores = [80, 90, 40, 70, ...otherScore];

  // for (let i = 0; i < scores.length; i++){
  //   console.log(`Score ${i}: ${scores[i]}`);
  // }
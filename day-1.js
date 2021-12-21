const FS = require('fs');

// // pt 1 // //
// FS.readFile('day-1-input.txt', (err, data) => {
//   // console.log(data.toString());
//   let nums = data.toString().split('\n');

//   let count = 0;
//   let lastNum = nums[0];
//   for (let i=1; i<nums.length; i++) {
//     if (lastNum * 1 < nums[i] * 1) {
//       count++;
//     }
//     lastNum = nums[i];
//   }

//   console.log(count);

// });


// // pt 2 // //
FS.readFile('day-1-input.txt', (err, data) => {

  let nums = data.toString().split('\n').map(ln => parseInt(ln));

  let count = 0;
  let lastSum = nums[0] + nums[1] + nums[2];
  for (let i = 2; i < nums.length-1; i++) {
    newSum = nums[i-1] + nums[i] + nums[i+1];
    if (newSum > lastSum) {
      count++;
    }
    lastSum = newSum;
  }

  console.log(count);

});
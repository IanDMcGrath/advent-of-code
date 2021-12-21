const FS = require('fs');

// // pt 1 // //
// FS.readFile('day-2-input.txt', (err, data) => {
//   let commands = data.toString().split('\n');

//   let forward = 0;
//   let depth = 0;

//   commands.forEach(command => {
//     const [dir, val] = command.split(' ');

//     switch (dir) {
//       case 'up':
//         depth -= val * 1;
//         break;
//       case 'down':
//         depth += val * 1;
//         break;
//       case 'forward':
//         forward += val * 1;
//         break;
//       default:
//         break;
//     }
//   });

//   console.log(`forward: ${forward} // depth: ${depth}`);
//   console.log(forward * depth);
// });

// // pt 2 // //
FS.readFile('day-2-input.txt', (err, data) => {
  let commands = data.toString().split('\n');

  let forward = 0;
  let depth = 0;
  let aim = 0;
  let lastFwd = 0;

  commands.forEach(command => {
    const [dir, val] = command.split(' ');

    switch (dir) {
      case 'up':
        aim -= val * 1;
        break;
      case 'down':
        aim += val * 1;
        break;
      case 'forward':
        forward += val * 1;
        lastFwd = val;
        depth += aim * val;
        break;
      default:
        break;
    }
  });

  console.log(`forward: ${forward} // depth: ${depth}`);
  console.log(forward * depth);
});
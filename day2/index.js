const fs = require('fs');

const data = fs.readFileSync('data.txt', { encoding: 'utf8' }).split('\n');

let horizontal = 0;
let depth = 0;
let aim = 0;

for (x = 0; x < data.length; x++) {
  if (data[x].charAt(0) == 'f') {
    horizontal += parseInt(data[x].charAt(data[x].length - 1));
    depth += aim * parseInt(data[x].charAt(data[x].length - 1));
  } else if (data[x].charAt(0) == 'd') {
    aim += parseInt(data[x].charAt(data[x].length - 1));
  } else if (data[x].charAt(0) == 'u') {
    aim -= parseInt(data[x].charAt(data[x].length - 1));
  }
}

console.log(horizontal, depth);
console.log(horizontal * depth);

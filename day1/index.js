const fs = require('fs');

const data = fs
  .readFileSync('data.txt', { encoding: 'utf8' })
  .split('\n')
  .filter((x) => x)
  .map((x) => parseInt(x));

let counter = 0;
for (x = 0; x < data.length; x++) {
  if (data[x] < data[x + 1]) {
    counter++;
  }
}

counter = 0;
console.log(counter);

for (x = 0; x < data.length; x++) {
  if (
    data[x] + data[x + 1] + data[x + 2] <
    data[x + 1] + data[x + 2] + data[x + 3]
  ) {
    counter++;
  }
}
console.log(counter);

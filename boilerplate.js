const fs = require('fs');

const data = fs
  .readFileSync('day1.txt', { encoding: 'utf8' })
  .split('')
  .filter((x) => x)
  .map((x) => parseInt(x));
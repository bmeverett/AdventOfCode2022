import * as fs from 'fs';

export async function run() {
  const input = await fs.readFileSync('./inputs/day3.txt');
  const values = input.toString().split('\n');
  let score = 0;
  for (const val of values) {
    const partOne = val.slice(0, val.length / 2);
    const partTwo = val.slice(val.length / 2, val.length);

    const intersect = new Set(Array.from(partOne).filter((item) => Array.from(partTwo).includes(item)));
    intersect.forEach((item) => {
      if (item === item.toUpperCase()) {
        score += item.toLowerCase().charCodeAt(0) - 70;
      } else {
        score += item.charCodeAt(0) - 96;
      }
    });
  }

  console.log(score);
  return score;
}

export async function part2() {
  const input = await fs.readFileSync('./inputs/day3.txt');
  const values = input.toString().split('\n');
  let score = 0;
  for (let i = 0; i < values.length; i += 3) {
    const e1 = Array.from(values[i]);
    const e2 = Array.from(values[i + 1]);
    const e3 = Array.from(values[i + 2]);

    const e1e2Intersect = e1.filter((item) => e2.includes(item));
    //console.log(e1e2Intersect);
    const intersect = new Set(e1e2Intersect.filter((item) => e3.includes(item)));
    // console.log(intersect);
    intersect.forEach((item) => {
      if (item === item.toUpperCase()) {
        score += item.toLowerCase().charCodeAt(0) - 70;
      } else {
        score += item.charCodeAt(0) - 96;
      }
    });
  }

  console.log(score);
  return score;
}

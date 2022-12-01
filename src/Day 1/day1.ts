import * as fs from 'fs';

export async function day1(part2 = false) {
  const input = await fs.readFileSync('./inputs/day1.txt');

  const values = input.toString().split('\n');
  let max = 0;
  let currentMax = 0;

  const elves: number[] = [];
  for (const val of values) {
    if (val === '') {
      max = Math.max(currentMax, max);
      elves.push(currentMax);
      currentMax = 0;
      continue;
    }

    currentMax += Number.parseInt(val);
  }

  const top3 = elves
    .sort((a, b) => b - a)
    .splice(0, 3)
    .reduce((prev, next, index, arr) => prev + next);

  console.log(top3);
  console.log(max);
  return max;
}

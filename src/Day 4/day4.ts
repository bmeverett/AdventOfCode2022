import * as fs from 'fs';

export async function run() {
  const input = await fs.readFileSync('./inputs/day4.txt');
  const values = input.toString().split('\n');
  let count = 0;
  for (const val of values) {
    const pair = val.split(',');
    const [p1Min, p1Max] = pair[0].split('-').map(Number);
    const [p2Min, p2Max] = pair[1].split('-').map(Number);

    if ((p2Min >= p1Min && p2Max <= p1Max) || (p1Min >= p2Min && p1Max <= p2Max)) {
      count += 1;
    }
  }

  console.log(count);
  return count;
}

export async function part2() {
  const input = await fs.readFileSync('./inputs/day4.txt');
  const values = input.toString().split('\n');
  let count = 0;
  for (const val of values) {
    const pair = val.split(',');
    const [p1Min, p1Max] = pair[0].split('-').map(Number);
    const [p2Min, p2Max] = pair[1].split('-').map(Number);

    const p1Range = [];
    const p2Range: number[] = [];

    for (let i = p1Min; i <= p1Max; i++) {
      p1Range.push(i);
    }

    for (let i = p2Min; i <= p2Max; i++) {
      p2Range.push(i);
    }
    const intersect = p1Range.filter((x) => p2Range.includes(x));
    if (intersect.length > 0) {
      count += 1;
    }
  }

  console.log(count);
  return count;
}

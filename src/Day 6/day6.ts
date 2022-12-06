import * as fs from 'fs';

export async function run(part2 = false) {
  const input = await fs.readFileSync('./inputs/day6.txt');
  const values = input.toString();

  const markerLength = part2 ? 14 : 4;
  const marker = [];
  for (let i = 0; i < values.length; i++) {
    if (marker.length < markerLength) {
      marker.push(values[i]);
      continue;
    } else {
      marker.splice(0, 1);
      marker.push(values[i]);
    }

    if (marker.length === new Set(marker).size) {
      console.log(i);
      return i;
    }
  }

  return 0;
}

export async function part2() {
  const input = await fs.readFileSync('./inputs/day6.txt');
  const values = input.toString().split('\n');
  let count = 0;

  for (const val of values) {
  }
}

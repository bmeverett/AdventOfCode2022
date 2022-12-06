import * as fs from 'fs';

export async function run() {
  const input = await fs.readFileSync('./inputs/day5.txt');
  const values = input.toString().split('\n');
  let count = 0;
  const crates = new Map<number, string[]>([
    [1, ['R', 'W', 'F', 'H', 'T', 'S']],
    [2, ['W', 'Q', 'D', 'G', 'S']],
    [3, ['W', 'T', 'S']],
    [4, ['J', 'Z', 'Q', 'N', 'T', 'W', 'R', 'D']],
    [5, ['Z', 'T', 'V', 'L', 'G', 'H', 'B', 'F']],
    [6, ['G', 'S', 'B', 'V', 'C', 'T', 'P', 'L']],
    [7, ['P', 'G', 'W', 'T', 'R', 'B', 'Z']],
    [8, ['R', 'J', 'C', 'T', 'M', 'G', 'N']],
    [9, ['W', 'B', 'G', 'L']],
  ]);

  for (const val of values) {
    const line = val.split(' ');
    const move = Number.parseInt(line[1]);
    const from = Number.parseInt(line[3]);
    const to = Number.parseInt(line[5]);

    const fromCrate = crates.get(from);
    const toCrate = crates.get(to);

    if (!fromCrate || !toCrate) continue;
    let cratesToMove: string[] = [];
    for (let i = 1; i <= move; i++) {
      cratesToMove.splice(0, 0, ...fromCrate.splice(0, 1));
    }

    crates.set(to, [...cratesToMove, ...toCrate]);
  }

  let top = '';
  const finalValues = Array.from(crates.values());
  for (const c of finalValues) {
    if (c.length > 0) {
      top += c[0];
    }
  }
  console.log(top);
  return count;
}

export async function part2() {
  const input = await fs.readFileSync('./inputs/day5.txt');
  const values = input.toString().split('\n');
  let count = 0;
  const crates = new Map<number, string[]>([
    [1, ['R', 'W', 'F', 'H', 'T', 'S']],
    [2, ['W', 'Q', 'D', 'G', 'S']],
    [3, ['W', 'T', 'S']],
    [4, ['J', 'Z', 'Q', 'N', 'T', 'W', 'R', 'D']],
    [5, ['Z', 'T', 'V', 'L', 'G', 'H', 'B', 'F']],
    [6, ['G', 'S', 'B', 'V', 'C', 'T', 'P', 'L']],
    [7, ['P', 'G', 'W', 'T', 'R', 'B', 'Z']],
    [8, ['R', 'J', 'C', 'T', 'M', 'G', 'N']],
    [9, ['W', 'B', 'G', 'L']],
  ]);

  // const crates = new Map<number, string[]>([
  //   [1, ['N', 'Z']],
  //   [2, ['D', 'C', 'M']],
  //   [3, ['P']],
  // ]);
  for (const val of values) {
    const line = val.split(' ');
    const move = Number.parseInt(line[1]);
    const from = Number.parseInt(line[3]);
    const to = Number.parseInt(line[5]);

    const fromCrate = crates.get(from);
    const toCrate = crates.get(to);

    if (!fromCrate || !toCrate) {
      continue;
    }

    toCrate.splice(0, 0, ...fromCrate.splice(fromCrate.length - move, fromCrate.length));
    // toCrate.splice(0, 0, ...fromCrate.splice(0, move));
  }

  let top = '';
  const finalValues = Array.from(crates.values());
  for (const c of finalValues) {
    if (c.length > 0) {
      top += c[0];
    }
  }
  //  PRTTGRFPS
  console.log(top);
  return count;
}

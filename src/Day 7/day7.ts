import * as fs from 'fs';

class File {
  name: string;
  size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
}
class Directory {
  name: string;
  files: File[] = [];
  parent: Directory | null = null;

  constructor(name: string, parent: Directory | null) {
    this.name = name;
    this.parent = parent;
  }
}

export async function run(part2 = false) {
  const input = await fs.readFileSync('./inputs/day7.txt');
  const values = input.toString().split('\n');

  let count = 0;
  let prevCommand = '';
  let currentDir: Directory | null = new Directory('/', null);
  for (let i = 0; i < values.length; i++) {
    const split = values[i].split(' ');

    if (split.includes('$')) {
      const command = split[1];
      switch (command) {
        case 'cd':
          const path = split[2];
          if (path === '/') {
            continue;
          } else if (path === '..') {
            currentDir = currentDir?.parent ?? null;
          } else {
          }
          break;
        case 'ls':
          break;
      }
    } else {
    }
  }
  console.log(count);
  return 0;
}

export async function part2() {
  const input = await fs.readFileSync('./inputs/day7.txt');
  const values = input.toString().split('\n');
  let count = 0;

  for (const val of values) {
  }
}

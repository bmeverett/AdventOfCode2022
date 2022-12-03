import * as fs from 'fs';

export async function run() {
  const input = await fs.readFileSync('./inputs/day2.txt');
  const values = input.toString().split('\n');
  let score = 0;
  for (const val of values) {
    const game = val.split(' ');
    const p1 = game[0];
    const p2 = game[1];

    const p1Rock = p1 === 'A';
    const p1Paper = p1 === 'B';
    const p1Scisors = p1 === 'C';

    const p2Rock = p2 === 'X';
    const p2Paper = p2 === 'Y';
    const p2Scisors = p2 === 'Z';

    // points for playing
    if (p2Rock) score += 1;
    else if (p2Paper) score += 2;
    else if (p2Scisors) score += 3;

    //outcome
    //draw
    if ((p1Rock && p2Rock) || (p2Paper && p1Paper) || (p2Scisors && p1Scisors)) score += 3;
    else if ((p2Rock && p1Scisors) || (p2Scisors && p1Paper) || (p2Paper && p1Rock)) score += 6;
  }

  console.log(score);
  return score;
}

export async function part2() {
  const input = await fs.readFileSync('./inputs/day2.txt');
  const values = input.toString().split('\n');
  let score = 0;
  for (const val of values) {
    const game = val.split(' ');
    const p1 = game[0];
    const p2 = game[1];

    const p1Rock = p1 === 'A';
    const p1Paper = p1 === 'B';
    const p1Scisors = p1 === 'C';

    const lost = p2 === 'X';
    const draw = p2 === 'Y';
    const win = p2 === 'Z';

    // points for playing
    if (win) score += 6;
    else if (draw) score += 3;

    //outcome
    //draw
    if (lost && p1Rock) score += 3;
    else if (lost && p1Paper) score += 1;
    else if (lost && p1Scisors) score += 2;
    else if (win && p1Rock) score += 2;
    else if (win && p1Paper) score += 3;
    else if (win && p1Scisors) score += 1;
    else if (draw && p1Rock) score += 1;
    else if (draw && p1Paper) score += 2;
    else if (draw && p1Scisors) score += 3;

    //rock beats paper, sciors beat paper, paper beats rock
    //if ((lost && p1Scisors) || (draw && p1Paper) || (win && p1Rock)) score += 6;
  }

  //12415

  console.log(score);
  return score;
}

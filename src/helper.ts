import * as fs from 'fs';

export function readFileToArray(day: number, fileName = 'input') {
    return fs.readFileSync(`/home/rene/Workspace/AdventOfCode2020/src/day${day}/${fileName}`).toString().split("\n");
}

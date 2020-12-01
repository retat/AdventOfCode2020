import * as fs from 'fs';

export function readFileToNumberArray(day: number, fileName = 'input') {
    return fs.readFileSync(`/home/rene/Workspace/AdventOfCode2020/src/day${day}/${fileName}`)
        .toString()
        .split("\n")
        .map(x => +x);
}

export function readFileToStringArray(day: number, fileName = 'input') {
    return fs.readFileSync(`/home/rene/Workspace/AdventOfCode2020/src/day${day}/${fileName}`)
        .toString()
        .split("\n")
}

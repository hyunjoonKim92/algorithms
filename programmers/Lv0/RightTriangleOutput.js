"use strict";

// 직각삼각형 출력 - 프로그래머스
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let star = "";

    for (let i = 0; i < Number(input[0]); i++) {
        for (let j = 0; j <= i; j++) {
            star += "*";
        }

        star += "\n";
    }

    console.log(star);
});
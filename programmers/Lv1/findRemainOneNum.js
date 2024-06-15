"use strict"

// 나머지가 1이 되는 수 찾기 - 프로그래머스
function solution(n) {
    let divisorArr = [];

    for (let i = 1, len = n; i < len; i++) {
        if (n % i === 1) {
            divisorArr.push(i);
        }
    }

    return Math.min(...divisorArr);
}

// improved func
function improvedSolution(n, x = 1) {
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }
}
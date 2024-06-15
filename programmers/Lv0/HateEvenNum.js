"use strict";

// 짝수는 싫어요 - 프로그래머스
function solution(n) {
    let result = [];

    for (let i = 1, len = n; i <= len; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }

    return result;
}

// improved func
function improvedSoluction(n) {
    return Array(n).fill(1).map((v, i) => v + i).filter(v => v % 2 === 1);
}
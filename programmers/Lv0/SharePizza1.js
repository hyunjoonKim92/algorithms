"use strict";

// 피자 나눠 먹기 (1) - 프로그래머스
function solution(n) {
    const num = n / 7;

    if (!Number.isInteger(num)) {
         return Math.floor(num) + 1;
    } else {
        return num;
    }
}

// improved fun
function improvedSoluction(n) {
    return Math.ceil(n / 7);
}
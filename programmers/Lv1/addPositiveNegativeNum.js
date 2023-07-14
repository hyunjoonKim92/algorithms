"use strict"

// 음양 더하기 (프로그래머스)
function solution(absolutes, signs) {
    let sum = 0;

    absolutes.forEach((item, index) => {
        if (signs[index]) {
            sum += item;
        } else {
            sum -= item;
        }
    });

    return sum;
}

// improved fun
function improvedSolution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
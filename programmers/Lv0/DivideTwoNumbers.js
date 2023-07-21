"use strict"

// 두 수의 나눗셈 (프로그래머스)
function solution(num1, num2) {
    if (num1 < 0 && num1 > 100) return;
    if (num2 < 0 && num2 > 100) return;

    return Math.floor((num1 / num2) * 100 / 100 * 1000);
}

// improved fun
function improvedSolution(num1, num2) {
    if (num1 < 0 && num1 > 100) return;
    if (num2 < 0 && num2 > 100) return;

    return Math.trunc(num1 / num2 * 1000);
}
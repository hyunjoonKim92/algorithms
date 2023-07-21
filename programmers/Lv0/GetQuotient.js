"use strict"

// 몫 구하기 (프로그래머스)
function solution(num1, num2) {
    if (num1 < 0 && num1 > 100) return;
    if (num2 < 0 && num2 > 100) return;

    return Math.floor(num1 / num2);
}
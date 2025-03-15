"use strict";

/**
 * 두 수의 나눗셈
 * @param {number} num1 - 첫번째 정수
 * @param {number} num2 - 두번째 정수
 * @returns {number}
 */
function solution(num1, num2) {
    if (num1 < 0 && num1 > 100) return;
    if (num2 < 0 && num2 > 100) return;

    return Math.floor((num1 / num2) * 100 / 100 * 1000);
}

/**
 * improved func
 * @description '0' 절삭 용도로 Math.trunc() 사용
 */
function improvedSolution(num1, num2) {
    if (num1 < 0 && num1 > 100) return;
    if (num2 < 0 && num2 > 100) return;

    return Math.trunc(num1 / num2 * 1000);
}

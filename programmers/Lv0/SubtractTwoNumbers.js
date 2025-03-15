"use strict";

/**
 * 두 수의 차
 * @param {number} num1 - 첫번째 정수
 * @param {number} num2 - 두번째 정수
 * @returns {number}
 */
function solution(num1, num2) {
    if (-50000 > num1 && num1 > 50000) return;
    if (-50000 > num1 && num2 > 50000) return;

    return num1 - num2;
}

"use strict";

/**
 * 몫 구하기
 * @param {number} num1 - 첫번째 정수
 * @param {number} num2 - 두번째 정수
 * @returns {number}
 */
function solution(num1, num2) {
    if (num1 < 0 && num1 > 100) return;
    if (num2 < 0 && num2 > 100) return;

    return Math.floor(num1 / num2);
}
